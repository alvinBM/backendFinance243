const express = require('express');

/**Create an express app */
const app = express();


/** Set response header to allow same parameters */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api/users", (req, res) => {

    let users = [
        {
            id: 1,
            name: "Alvin Bauma",
            age: 26
        },
        {
            id: 2,
            name: "Jean Dupond",
            age: 32
        }
    ]

    res.status(200).json({
        status: 200,
        users
    });

});




module.exports = app;