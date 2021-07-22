const express = require('express');
const cors = require('cors');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const OpenApiValidator = require('express-openapi-validator');

const auth = require('./auth');
const dummy = require('./dummy');
const workspace = require('./workspace');
const channel = require('./channel');
const channelMessages = require('./channelMessages');
const directMessages = require('./directMessages');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const apiSpec = path.join(__dirname, '../api/openapi.yaml');

const apidoc = yaml.load(fs.readFileSync(apiSpec, 'utf8'));
app.use('/v0/api-docs', swaggerUi.serve, swaggerUi.setup(apidoc));

app.post('/authenticate',  auth.authenticate);
app.use(
    OpenApiValidator.middleware({
      apiSpec: apiSpec,
      validateRequests: true,
      validateResponses: true,
    }),
);

app.get('/v0/dummy', dummy.get);
app.get('/v0/workspace', auth.check, workspace.getAll);
app.get('/v0/channel/:workspace', auth.check, channel.getAll);
app.get('/v0/message/:channel', auth.check, channelMessages.getAll);
app.post('/v0/message/:channel', auth.check, channelMessages.post);
app.get('/v0/dm/:user', auth.check, directMessages.getAll);
app.post('/v0/dm/:user', auth.check, directMessages.post);

app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,
    errors: err.errors,
    status: err.status,
  });
});

module.exports = app;
