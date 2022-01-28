const Joi = require("joi")

//validation of user input
function validateCustomer(input){
    const schema = Joi.object({
        value: Joi.number().min(3).max(10000).required(),  
    })
    return schema.validate(input)
}

module.exports.validate = validateCustomer;