module.exports = app => {
    const controller = require('../controllers/contact')()

    app.route('/avaliacoes').post(controller.insertContact)
}