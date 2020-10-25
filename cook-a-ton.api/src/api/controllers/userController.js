'use strict';
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.getAllUsers = function(req, res) {
    User.find({},
        function(err, users) {
            if (err) { return res.send(err); }
            res.json(users);
        });
};

exports.createUser = function(req, res) {
    var newUser = new User(req.body);
    newUser.save(
        function(err, user) {
            if (err) { return res.send(err); }
            res.json(user);
        });
};

exports.getUser = function(req, res) {
    User.findById(req.params.userId,
        function(err, user) {
            if (err) { return res.send(err); }
            res.json(user);
        });
};

exports.updateUser = function(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false },
        function(err, user) {
            if (err) { return res.send(err); }
            res.json(user);
        });
};

exports.deleteUser = function(req, res) {
    User.remove({
        _id: req.params.userId
    }, function(err, user) {
        if (err) { return res.send(err); }
        res.json({ message: 'User successfully deleted' });
    });
};