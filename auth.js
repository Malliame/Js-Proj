const express = require('express');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: 'http://localhost:8690',
    optionsSuccessStatus: 200
}
app.use(express.json());
app.use(cors(corsOptions));


app.post('/register', (req, res) => {

    console.log("Registering ...");

    const obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        type: req.body.type,
        password: bcrypt.hashSync(req.body.password, 10)
    };

    User.create(obj).then( rows => {
        

        const usr = {
            userId: rows.id,
            type: rows.type,
            user: rows.username
        };

        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);

        console.log("Registered.");
        res.json({ token: token });


    }).catch( err => {
        if(err.parent.code == 'ER_DUP_ENTRY' ) res.status(409).json({ msg: "Username taken!"}) 
        else res.status(500).json(err) 
    });
});

app.post('/login', (req, res) => {
    console.log("Logging in..");
    User.findOne({ where: { username: req.body.username } })
        .then( usr => {

            if (bcrypt.compareSync(req.body.password, usr.password)) {

                const obj = {
                    userId: usr.id,
                    type: usr.type,
                    user: usr.username
                };
        
                const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
            
                console.log("Logged in as "  + usr.username);
                res.json({ token: token });
            } else {
                res.status(400).json({ msg: "Invalid credentials"});
            }
        })
        .catch( err =>{ 
            res.status(500).json(err) 
        });
});

app.listen({ port: 8420 }, async () => {
    await sequelize.authenticate();
    console.log("Started Auth Service");
});