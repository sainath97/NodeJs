const express = require('express');
const Joi = require('joi');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const validator = require('express-joi-validation').createValidator({});
const bodyQuerySchema = require('./validations');
const report = require('../utils/status');
const data = require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const router = express.Router();

const queryParamSchema = Joi.object({
    loginSubString : Joi.string().required(),
    limit : Joi.number().integer()
});

const errorDispatcher = (res) => {
    return res.status(HttpStatus.NOT_FOUND).send({
        error : HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    });
};

const appStart = (req, res) => {
    res.status(HttpStatus.OK).send(report.SUCCESS);
};

router.get('/users/:id', (req, res) => {
    const user = data.getUserById(req.params.id);
    (!user) ? errorDispatcher(res) : res.status(HttpStatus.OK).send({ data: user });
});

router.get('/users', validator.query(queryParamSchema), (req, res) => {
    const loginSubString = req.query.loginSubString;
    const limit = req.query.limit || 10;
    (!loginSubString) ? errorDispatcher(res) : res.send(data.searchUser(loginSubString, limit));
});


router.post('/user', validator.body(bodyQuerySchema), (req, res) => {
    data.createUser(req);
    res.status(HttpStatus.OK).send(report.CREATE);
});

router.delete('/delete/:id', (req, res) => {
    data.deleteUser(req.params.id);
    res.status(HttpStatus.OK).send(report.DELETE);
});

router.put('/user/:id', validator.body(bodyQuerySchema), (req, res) => {
    const user =  data.updateUser(req);
    (!user) ? errorDispatcher(res) : res.status(HttpStatus.OK).send(report.UPDATE);
});

router.get('/', appStart);
app.use('/', router);
app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`));
