const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userController = require('./controllers/users');

/**Create an express app */
const app = express();


/** Connection a la BD mongoDB */
mongoose.connect('mongodb+srv://finance243:finance243@cluster0.oxsxg.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));





/** Set response header to allow same parameters */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


/** Set body parser pour gerer les body envoyé par les requetes */
app.use(bodyParser.urlencoded());



/** 
 * LES ENDPOINTS
 */

/** Creer un nouveau user */
app.post('/api/user', userController.createUser);


/** Liste des users */
app.get("/api/users", userController.getUsers);


/** Get un user */
app.get("/api/users/:id", userController.getUser);

/** Update un user */
app.put("/api/users/:id", userController.updateUser);


/** Delete un user */
app.delete("/api/users/:id", userController.deleteUser);



module.exports = app;