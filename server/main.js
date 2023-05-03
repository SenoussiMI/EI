const express = require('express');
const routes = require('./controllers/router');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);



app.listen(5000, () => {
  console.log('Server started on port 5000');
});
