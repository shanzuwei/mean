const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
//   axios.get(`${API}/posts`,
//   {
//     timeout: 5000,
//     proxy: {
//       host: 'http://e83047:angular4$Octo28@cahoproxy.ca.cgugroup',
//       port: 3128
//     }
//   }
// )
axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      console.log('error: API, ' + error);
      res.status(500).send(error)
    });
});

module.exports = router;
