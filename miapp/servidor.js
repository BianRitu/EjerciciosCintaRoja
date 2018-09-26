
const express = require('express');
const bodyParser = require('body-parser');
const {Article, Receipt} = require('clienteMongo.js');
const app = express();
const port = 3000;

app.get('/', (req, res)=> res.send('Hello World'))
app.listen(port, () => console.log(`Server is workin on port ${3000}`))

