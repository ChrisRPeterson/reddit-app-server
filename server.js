const express = require('express');
const morgan = require('morgan');

const port = 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const query = req.query;
  console.log({ query });
  console.log(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
