const User = require('../models/User');

exports.getUsers = (req, res, next) => {
    User.find()
        .then(users => {
            res.status(200).json({
                status: 200,
                users,
                message: "Users getted from controller"
            });
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getUser = (req, res, next) => {
    User.findOne({ phone: req.params.id })
        .then(user => {
            res.status(200).json({
                status: 200,
                user,
                message: "User getted from controller"
            });
        })
        .catch(error => res.status(400).json({ error }));
};

exports.createUser = (req, res, next) => {
    const user = new User({
        ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.updateUser = (req, res, next) => {
    User.updateOne({ phone: req.params.id }, { ...req.body, phone: req.params.id })
    .then(() => res.status(200).json({ message: 'User modifié avec succes !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({ phone: req.params.id })
    .then(() => res.status(200).json({ message: 'User supprimé avec succes !'}))
    .catch(error => res.status(400).json({ error }));
};