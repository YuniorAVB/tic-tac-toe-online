const express = require('express');
const morgan = require('morgan');
const path = require('path');

const http = require('http');

const app = express();

const server = http.createServer(app);

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

module.exports = server;
