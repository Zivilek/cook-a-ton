'use strict';
var mongoose = require('mongoose'),
    UserRecipeTag = mongoose.model('UserRecipeTag');

exports.getAll = function(req, res) {
    UserRecipeTag.find({},
        function(err, userRecipeTags) {
            if (err) { return res.send(err); }
            res.json(userRecipeTags);
        });
};

exports.create = function(req, res) {
    var newUserRecipeTag = new UserRecipeTag(req.body);
    newUserRecipeTag.save(
        function(err, userRecipeTag) {
            if (err) { return res.send(err); }
            res.json(userRecipeTag);
        });
};

exports.get = function(req, res) {
    UserRecipeTag.findById(req.params.id,
        function(err, userRecipeTag) {
            if (err) { return res.send(err); }
            res.json(userRecipeTag);
        });
};

exports.update = function(req, res) {
    UserRecipeTag.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false },
        function(err, userRecipeTag) {
            if (err) { return res.send(err); }
            res.json(userRecipeTag);
        });
};

exports.delete = function(req, res) {
    UserRecipeTag.remove({
        _id: req.params.id
    }, function(err, userRecipeTag) {
        if (err) { return res.send(err); }
        res.json({ message: 'UserRecipeTag successfully deleted' });
    });
};