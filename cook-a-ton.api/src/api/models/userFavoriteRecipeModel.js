'use strict';
const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const UserFavoriteRecipeSchema = new Schema({
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

UserFavoriteRecipeSchema.plugin(timestamps);
UserFavoriteRecipeSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('UserFavoriteRecipe', UserFavoriteRecipeSchema, 'UserFavoriteRecipe');