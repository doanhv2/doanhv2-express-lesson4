// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug')
app.set('views', './views')

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

let todos = [
  'Đi chợ',
  'Nấu cơm',
  'Rửa bát',
  'Học code tại CodersX'
]

app.get('/todos', (request, response) => {
  response.render('todos', { todos: todos});
});

app.post('/todos/create', (request, response) => {
  console.log(request.body);
  todos.push()
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
