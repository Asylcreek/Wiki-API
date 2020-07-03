const express = require('express');

const articleController = require('../controllers/articleController');

router = express.Router();

router
    .route('/')
    .get(articleController.getAllArticles)
    .post(articleController.createArticle)
    .delete(articleController.deleteAllArticles);

router
    .route('/:articleTitle')
    .get(articleController.getArticle)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle);

module.exports = router;