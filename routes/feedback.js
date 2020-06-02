const axios = require('axios');
const bcrypt = require("bcryptjs")
const crypto = require("crypto");
const saltRounds = 10
//https://feedbackservice.ew.r.appspot.com
//http://localhost:8080

const basicAuth = {
  auth: {
    username: '123456',
    password: 'usrpass2'
  }
}

module.exports = app => {



  app.get('/api/feedback/list', (req, res) => {
    console.log("In Suggestion List")

    var dataList = [];
    let data = {};

    axios.post('https://feedbackservice.ew.r.appspot.com/ext', data, basicAuth)
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


    const iv = "1010101010101010";
    let key = "3131313131313131313131313131313131313131313131313131313131313131";

    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, "hex"), Buffer.from(iv));
    cipher.setAutoPadding(true)
    let crypt = cipher.update(formData.detail, 'utf8', 'base64');
    crypt += cipher.final("base64");

    formData.detail = crypt

    axios.post('https://feedbackservice.ew.r.appspot.com/ins', formData, basicAuth)
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

    console.log('formData:', formData);

    axios.post('https://feedbackservice.ew.r.appspot.com/del', formData, basicAuth)
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
