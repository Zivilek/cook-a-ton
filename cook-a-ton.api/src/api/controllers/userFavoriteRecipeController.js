'use strict';
var mongoose = require('mongoose'),
    UserFavoriteRecipe = mongoose.model('UserFavoriteRecipe');

exports.getAllUserFavoriteRecipes = function(req, res) {
    UserFavoriteRecipe.find({}).populate('recipes', 'name').exec(function(err, userFavoriteRecipes) {
        if (err) { return res.send(err); }
        res.json(userFavoriteRecipes);
    });
};

exports.createUserFavoriteRecipe = function(req, res) {
    var newUserFavoriteRecipe = new UserFavoriteRecipe(req.body);
    newUserFavoriteRecipe.save(
        function(err, userFavoriteRecipe) {
            if (err) { return res.send(err); }
            res.json(userFavoriteRecipe);
        });
};

exports.getUserFavoriteRecipe = function(req, res) {
    UserFavoriteRecipe.findById(req.params.userFavoriteRecipeId,
        function(err, userFavoriteRecipe) {
            if (err) { return res.send(err); }
            res.json(userFavoriteRecipe);
        });
};

exports.updateUserFavoriteRecipe = function(req, res) {
    UserFavoriteRecipe.findOneAndUpdate({ _id: req.params.userFavoriteRecipeId }, req.body, { new: true, useFindAndModify: false },
        function(err, userFavoriteRecipe) {
            if (err) { return res.send(err); }
            res.json(userFavoriteRecipe);
        });
};

exports.deleteUserFavoriteRecipe = function(req, res) {
    UserFavoriteRecipe.remove({
        _id: req.params.userFavoriteRecipeId
    }, function(err, userFavoriteRecipe) {
        if (err) { return res.send(err); }
        res.json({ message: 'UserFavoriteRecipe successfully deleted' });
    });
};