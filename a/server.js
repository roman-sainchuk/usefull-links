const express = require('express');
const bodyParser = require('body-parser');
const localtunnel = require('localtunnel');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log(JSON.stringify(req.headers, null, 2));
  console.log(req.body);
  res.send('OK');
});

app.post('/tunnel', function (req, res) {
  console.log(JSON.stringify(req.headers, null, 2));
  console.log(req.body);
  res.send('OK');
});

app.listen(PORT, async function () {
  console.log(`Listening on port ${PORT}`);
  const { url } = await localtunnel({ port: PORT });
  console.log(`Public url: ${url}`);
});
