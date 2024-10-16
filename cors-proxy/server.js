const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/fetch', (req, res) => {
  const url = req.query.url;
  request({ url, json: true }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json(body);
    } else {
      res.status(response.statusCode).send(error);
    }
  });
});

app.listen(PORT, () => {
  console.log(`CORS Proxy running on http://localhost:${PORT}`);
});
