const mongoose = require('mongoose');

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
    dateCreated: Date,
});

articleSchema.pre('save', function(next) {
    this.dateCreated = Date.now();

    next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;