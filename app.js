//Require all necessary modules
const express = require('express');
// const bodyParser = require('body-parser');
const ejs = require('ejs');

const articleController = require(`${__dirname}/controllers/articleController.js`);

//Initialize express
const app = express();

//Set the view engine
// app.set('view engine', 'ejs');

//Middlewares
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

//Routes
app.get('/articles', articleController.getAllArticles);

// app.get("/about", articleController.about);

// app.get("/contact", articleController.contact);

// app.get("/compose", articleController.compose);

// app.post("/compose", articleController.createPost);

// app.get("/posts/:slug", articleController.getPost);

module.exports = app;