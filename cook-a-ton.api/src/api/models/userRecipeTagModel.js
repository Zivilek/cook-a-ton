'use strict';
const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const UserRecipeTagSchema = new Schema({
    tags: {
        type: Array,
        'default': ['lunch', 'snack', 'dinner', 'breakfast']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

UserRecipeTagSchema.plugin(timestamps);
UserRecipeTagSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('UserRecipeTag', UserRecipeTagSchema, 'UserRecipeTag');