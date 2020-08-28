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

    axios.get('https://user-feedback-subdomain.ew.r.appspot.com/v1/feedback/listFeedback', {
  headers: {
    'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdGhlZXMyNUBnbWFpbC5jb20iLCJpc3MiOiJmZWVkYmFjayIsInRpbWUiOiIyMDIwLTA4LTI3VDIxOjIyOjAzLjIxNzYwMSswMTowMCJ9.yzy6LaJVR_F1Zzp9nxCC29KEHWR0-EjcE9L2B4q7ooA`
  }
})
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

    axios.post('https://user-feedback-subdomain.ew.r.appspot.com/v1/feedback/createFeedback', formData,  {
  headers: {
    'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdGhlZXMyNUBnbWFpbC5jb20iLCJpc3MiOiJmZWVkYmFjayIsInRpbWUiOiIyMDIwLTA4LTI3VDIxOjIyOjAzLjIxNzYwMSswMTowMCJ9.yzy6LaJVR_F1Zzp9nxCC29KEHWR0-EjcE9L2B4q7ooA`
  }
})
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

    axios.post('https://user-feedback-subdomain.ew.r.appspot.com/v1/feedback/deleteFeedback', formData,  {
  headers: {
    'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdGhlZXMyNUBnbWFpbC5jb20iLCJpc3MiOiJmZWVkYmFjayIsInRpbWUiOiIyMDIwLTA4LTI3VDIxOjIyOjAzLjIxNzYwMSswMTowMCJ9.yzy6LaJVR_F1Zzp9nxCC29KEHWR0-EjcE9L2B4q7ooA`
  }
})
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
