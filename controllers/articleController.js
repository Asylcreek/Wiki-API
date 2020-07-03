const slugify = require('slugify');
const _ = require('lodash');
const Article = require('../models/articleModel');

exports.getAllArticles = async(req, res, next) => {
    try {
        const articles = await Article.find();

        res.status(200).json({
            status: 'success',
            data: articles,
        });

        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'An error occurred. Please check all input values and try again',
        });
    }
};

exports.createArticle = async(req, res, next) => {
    try {
        const title = req.body.title;
        const content = req.body.content;

        const newArticle = await Article.create({ title, content });

        res.status(200).json({
            status: 'success',
            data: newArticle,
        });

        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'An error occurred. Please check all input values and try again',
        });
    }
};

exports.deleteAllArticles = async(req, res, next) => {
    try {
        await Article.deleteMany();

        res.status(204).json({
            status: 'success',
            data: null,
        });

        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'An error occurred. Please check all input values and try again',
        });
    }
};

exports.getArticle = async(req, res, next) => {
    try {
        const title = req.params.articleTitle;

        const slug = slugify(_.lowerCase(title));

        const article = await Article.findOne({ slug });

        res.status(200).json({
            status: 'success',
            data: article,
        });

        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'An error occurred. Please check all input values and try again',
        });
    }
};

exports.updateArticle = async(req, res, next) => {
    try {
        const articleTitle = req.params.articleTitle;

        const slug = slugify(_.lowerCase(articleTitle));

        const { content } = req.body;

        const article = await Article.findOneAndUpdate({ slug }, { content }, { new: true, omitUndefined: true, runValidators: true });

        res.status(200).json({
            status: 'success',
            data: article,
        });

        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'An error occurred. Please check all input value and try again',
        });
    }
};

exports.deleteArticle = async(req, res, next) => {
    try {
        const articleTitle = req.params.articleTitle;

        const slug = slugify(_.lowerCase(articleTitle));

        await Article.findOneAndDelete({ slug });

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'An error occurred. Please check all input value and try again',
        });
    }
};