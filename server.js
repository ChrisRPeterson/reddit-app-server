const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const port = 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const redirectUri = 'http://52.14.170.19:3000';

app.get('/', (req, res) => {
  const query = req.query;

  if (!query.code) {
    res.end();
    return;
  }

  console.log({ query });
  if (query.error) {
    res.send(query.error);
  } else {
    let code = query.code;
    axios
      .post('https://www.reddit.com/api/v1/access_token', {
        Authorization: {
          user: 'soX6EClIb3nDAQ',
          password: '',
        },
        data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`,
      })
      .then((response) => {
        console.log(response);
      });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
