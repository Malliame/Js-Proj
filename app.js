const express = require('express');
const { sequelize } = require('./models');
const users = require('./routes/user');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/login');
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/login');
    
        req.user = user;
    
        next();
    });
}

app.get('/admin/register', (req, res) => {
    res.sendFile('register.html', { root: './static' });
});

app.get('/admin/login', (req, res) => {
    res.sendFile('login.html', { root: './static/' });
});

app.get('/admin/', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static' });
});

app.get('/admin/tickets', authToken, (req, res) => {
    res.sendFile('tickets.html', { root: './static' });
});

app.get('/admin/drivers', authToken, (req, res) => {
    res.sendFile('drivers.html', { root: './static' });
});

app.get('/admin/laws', authToken, (req, res) => {
    res.sendFile('laws.html', { root: './static' });
});

app.get('/admin/solutions', authToken, (req, res) => {
    res.sendFile('solutions.html', { root: './static' });
});


app.use(express.static(path.join(__dirname, 'static')));

app.listen({ port: 8690 }, async () => {
    await sequelize.authenticate();
    console.log("Started App");
});