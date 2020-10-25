'use strict';

module.exports = function(server) {
    var controller = require('../controllers/userRecipeTagController');

    server.get('/userRecipeTag', controller.getAll);
    server.post('/userRecipeTag', controller.create);

    server.get('/userRecipeTag/:id', controller.get);
    server.put('/userRecipeTag/:id', controller.update);
    server.del('/userRecipeTag/:id', controller.delete);
};