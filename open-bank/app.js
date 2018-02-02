const express = require('express');
const helmet = require('helmet');
const request = require('request-promise-native');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const getAuthString = ({ username, password }) =>
  `DirectLogin username=${username}, password=${password}, consumer_key=${process
    .env.OPEN_BANK_API_KEY}`;

const getAuthTokenString = token => `DirectLogin token="${token}"`;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

function login(req) {
  console.log('login');
  console.log(req.body);
  const options = {
    uri: 'https://apisandbox.openbankproject.com/my/logins/direct',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthString(req.body),
    },
    json: true, // Automatically parses the JSON string in the response
  };

  return request.post(options);
}

function getAccounts({ token }) {
  console.log('getAccounts', token);
  const options = {
    uri: 'https://apisandbox.openbankproject.com/obp/v3.0.0/my/accounts',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthTokenString(token),
    },
    json: true, // Automatically parses the JSON string in the response
  };

  return request.get(options).then(data => Object.assign(data, { token }));
}

function getBankAccount(account, token) {
  const options = {
    uri: `https://apisandbox.openbankproject.com/obp/v3.0.0/my/banks/${account.bank_id}/accounts/${account.id}/account`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: getAuthTokenString(token),
    },
    json: true, // Automatically parses the JSON string in the response
  };

  return request.get(options);
}

function getBankAccounts(accounts, token) {
  return Promise.all(accounts.map(account => getBankAccount(account, token)));
}

// function getTransactions({ accounts, token }) {
//   console.log('getTransactions', token);
//   const options = {
//     uri: 'https://apisandbox.openbankproject.com/obp/v3.0.0/my/accounts',
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//       Authorization: getAuthTokenString(token),
//     },
//     json: true, // Automatically parses the JSON string in the response
//   };

//   return request.get(options);
// }

// used for webops healthchecks & deployment.
app.get('/private/ping', (req, res) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(200).send('pong');
});

app.post('/login', (req, res) => {
  login(req)
    .then(token => getAccounts(token))
    .then(({ accounts, token }) => getBankAccounts(accounts, token))
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = app;
