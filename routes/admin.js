const express = require('express');
const users = require("./user");
const tickets = require("./ticket");
const user_types = require("./user_type");
const ticket_types = require("./ticket_type");
const ticket_solutions = require("./ticket_solution");

const routes = express.Router();

routes.use(express.json());
routes.use(express.urlencoded({extended: true}))

routes.use("/user", users);
routes.use("/ticket", tickets);
routes.use("/user_type", user_types);
routes.use("/ticket_type", ticket_types);
routes.use("/ticket_solution", ticket_solutions);

module.exports = routes;
