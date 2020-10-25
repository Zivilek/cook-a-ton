'use strict';
var mongoose = require('mongoose'),
    Recipe = mongoose.model('Recipe');

exports.getAllRecipes = function(req, res) {
    Recipe.find({}, function(err, recipes) {
        if (err)
            res.send(err);
        res.json(recipes);
    });
};

exports.createRecipe = function(req, res) {
    var newRecipe = new Recipe(req.body);
    newRecipe.save(function(err, recipe) {
        if (err)
            res.send(err);
        res.json(recipe);
    });
};

exports.getRecipe = function(req, res) {
    Recipe.findById(req.params.recipeId, function(err, recipe) {
        if (err)
            res.send(err);
        res.json(recipe);
    });
};

exports.updateRecipe = function(req, res) {
    Recipe.findOneAndUpdate({ _id: req.params.recipeId }, req.body, { new: true }, function(err, recipe) {
        if (err)
            res.send(err);
        res.json(recipe);
    });
};

exports.deleteRecipe = function(req, res) {
    Recipe.remove({
        _id: req.params.recipeId
    }, function(err, recipe) {
        if (err)
            res.send(err);
        res.json({ message: 'Recipe successfully deleted' });
    });
};