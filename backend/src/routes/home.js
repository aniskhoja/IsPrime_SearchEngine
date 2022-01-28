const express = require('express');
const router = express.Router();
const checkPrimeMiddleNum = require('../component/isPrime')
const { validate } = require('../models/inputValidation')

//home url
router.post('/', (req, res) => {
    const { error } = validate(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }
    //convert input into string
    let { value } = req.body
    const arg = parseInt(value)
    var result = checkPrimeMiddleNum(arg);
    //send 201 error back
    res.status(201).send(result);
})

module.exports = router