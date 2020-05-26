var suggests = require("../protos/protos/suggest_pb");
var suggestService = require("../protos/protos/suggest_grpc_pb");

var grpc = require("grpc");

let fs = require("fs");


module.exports = app => {

  let credentials = grpc.credentials.createSsl(
    fs.readFileSync("./certs/ca.crt"),
    fs.readFileSync("./certs/client.key"),
    fs.readFileSync("./certs/client.crt")
  );


  let unsafCreds = grpc.credentials.createInsecure();
  
    app.get('/api/suggestion/list', (req, res) => {
      console.log("In Suggestion List")

      var client = new suggestService.SuggestServiceClient("https://suggestiongoservice.ew.r.appspot.com/", credentials);

      var emptySuggestRequest = new suggests.ListSuggestRequest();

      var call = client.listSuggest(emptySuggestRequest, () => {});

      var dataList = [];

      call.on("data", response => {
        console.log("Client Streaming Response ", response.getSuggest().toString());
        let indiData = response.getSuggest().toString();
        let splitData = indiData.split(",");
        let data = {
          id: splitData[0],
          email: splitData[1],
          details: splitData[2],
          date: splitData[3],
        }
        dataList.push(data);
      });
    
      call.on("error", error => {
        console.error(error);
      });
    
      call.on("end", () => {
        console.log("End");
        console.log("dataList:",dataList);
        res.send(dataList);
      });


    });

    app.post('/api/suggestion/create', (req, res) => {
      console.log("In Suggestion Create")

      formData = req.body;

      console.log('formData:',formData);

      var client = new suggestService.SuggestServiceClient("https://suggestiongoservice.ew.r.appspot.com/", credentials);

      var suggestData = new suggests.Suggest();

      suggestData.setEmail(formData.email)
      suggestData.setDetail(formData.detail)
      suggestData.setDate(formData.date)

      console.log("suggestData:",suggestData)

      var suggestRequest = new suggests.CreateSuggestRequest();
      suggestRequest.setSuggest(suggestData);

      client.createSuggest(suggestRequest, (error, response) => {
        if (!error) {
          console.log("Received create suggest response,", response.toString());
          res.send(response.toString());
        } else {
          console.error(error);
          res.send(error);
        }
      });

      
    });


    app.post('/api/suggestion/delete', (req, res) => {
      console.log("In Suggestion Delete")

      var client = new suggestService.SuggestServiceClient("https://suggestiongoservice.ew.r.appspot.com/", credentials);

      var deleteSuggestRequest = new suggests.DeleteSuggestRequest();

      var suggestID = req.body.id;

      deleteSuggestRequest.setSuggestId(suggestID);

      client.deleteSuggest(deleteSuggestRequest, (error, response) => {
        if (!error) {
          console.log("Deleted suggest with id: ", response.toString());
          res.send(response.toString())
        } else {
          if (error.code === grpc.status.NOT_FOUND) {
            console.log("Not Found");
          } else {
            console.log("Sorry something went wrong");
          }
        }
      })

    });
  
  };
  