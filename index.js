const express = require('express')
const path = require('path'); 
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/form.html'));
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});