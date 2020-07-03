//Require all necessary modules
const express = require('express');

const articleRouter = require('./routes/articleRoutes');

//Initialize express
const app = express();

app.use(express.json());

//Mounted Routers
app.use('/articles', articleRouter);

module.exports = app;