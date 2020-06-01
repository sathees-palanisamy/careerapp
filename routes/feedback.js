const axios = require('axios');


module.exports = app => {

    const basicAuth = {
      auth: {
        username: '123456',
        password: 'usrpass2'
      }
    } 

    app.get('/api/feedback/list', (req, res) => {
      console.log("In Suggestion List")

      var dataList = [];
      let data = {};

      axios.post('https://feedbackservice.ew.r.appspot.com/ext', data , basicAuth)
      .then(response => {
          console.log(response.data)
          res.send(response.data);
      })
      .catch((error) => {
          console.log(error)
      });



    });

    app.post('/api/feedback/create', (req, res) => {
      console.log("In Suggestion Create")

      formData = req.body;

      console.log('formData:',formData);

      axios.post('https://feedbackservice.ew.r.appspot.com/ins', formData,basicAuth)
      .then(response => {
          console.log(response.data)
          res.send(response.toString());
      })
      .catch((error) => {
          console.log(error)
      });



    });

    app.post('/api/feedback/delete', (req, res) => {
      console.log("In Suggestion Create")

      formData = req.body;

      console.log('formData:',formData);

      axios.post('https://feedbackservice.ew.r.appspot.com/del', formData,basicAuth)
      .then(response => {
          console.log(response.data)
          res.send(response.toString());
      })
      .catch((error) => {
          console.log(error)
          res.send(error);
      });



    });

  

  
  };
  