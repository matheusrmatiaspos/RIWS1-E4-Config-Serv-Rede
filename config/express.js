const express = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express()

    app.set('port', process.env.PORT || 8080)

    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
      }));

    require('../api/routes/contact')(app)

    return app
};