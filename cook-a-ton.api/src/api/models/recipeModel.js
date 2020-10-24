'use strict';
const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    _id: {
        type: ObjectId,
    },
    name: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
    },
    course: {
        type: [{
            type: String,
            enum: ['dinner', 'lunch', 'breakfast', 'snack']
        }],
        default: ['lunch']
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema, 'recipe');