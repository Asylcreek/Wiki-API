const mongoose = require('mongoose');
const slugify = require('slugify');
const _ = require('lodash');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    slug: String,
    dateCreated: Date,
});

articleSchema.pre('save', function(next) {
    this.dateCreated = Date.now();

    this.slug = slugify(_.toLower(this.title));

    next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;