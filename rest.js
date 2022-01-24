const express = require('express');
const { sequelize } = require('./models');
const adminRoutes = require('./routes/admin');
const cors = require('cors');
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: 'http://127.0.0.1:8690',
    optionsSuccessStatus: 200
}

app.use('/admin', adminRoutes);
app.use(cors(corsOptions));

app.listen({ port: 8069 }, async () => {
    await sequelize.authenticate();
    console.log("Started REST service");
});