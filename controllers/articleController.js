const Article = require('../models/articleModel');

exports.getAllArticles = async(req, res) => {
    const articles = await Article.find();
};