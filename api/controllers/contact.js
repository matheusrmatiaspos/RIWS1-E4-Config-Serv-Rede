const { json } = require('body-parser');
require('dotenv').config();

module.exports = () => {
    const contacts = require('../models/contact')
    const controller = {}

    controller.insertContact = async (req,res) => {
        try {
            const newContact = await contacts.create(req.body);
            res.redirect(`${process.env.HOST}?name=${req.body.name}&email=${req.body.email}&message=${req.body.message}`);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
    }

    return controller
}