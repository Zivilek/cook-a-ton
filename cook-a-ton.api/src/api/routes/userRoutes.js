'use strict';

module.exports = function(server) {
    var users = require('../controllers/userController');

    server.get('/user', users.getAllUsers);
    server.post('/user', users.createUser);

    server.get('/user/:userId', users.getUser);
    server.put('/user/:userId', users.updateUser);
    server.del('/user/:userId', users.deleteUser);
};