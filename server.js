const express = require('express');
const server = express();
const ProjectRouter = require('./data/routers/projectRouter.js');
const ActionRouter = require('./data/routers/actionRouter.js');

server.use(express.json());
server.use('/projects', ProjectRouter);
server.use('/projects/actions', ActionRouter);

module.exports = server;