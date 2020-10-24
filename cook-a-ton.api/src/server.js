require('dotenv').config();
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3004;
mongoose = require('mongoose'),
    recipe = require('./api/models/recipeModel'), //created model loading here
    bodyParser = require('body-parser');

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => console.log("Connection could not be established.\n", error));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
var routes = require('./api/routes/recipeRoutes');
//register the route
routes(app);
//middlewares
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);
console.log("API server listening on port:", port);