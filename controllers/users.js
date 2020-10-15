exports.getUsers = (req, res, next) => {
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
        users,
        message : "Users getted from controller"
    });
};

exports.createUser = (req, res, next) => {
    console.log("requete recu", req.body);
    res.status(201).json({
        message: 'User créé from controller !'
    });
};