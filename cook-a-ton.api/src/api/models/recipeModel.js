'use strict';
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
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

RecipeSchema.plugin(timestamps);
RecipeSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('Recipe', RecipeSchema, 'Recipe');