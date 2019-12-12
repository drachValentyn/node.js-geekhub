const express = require('express');
const Vue = require('vue');
const server = express();
const renderer = require('vue-server-renderer').createRenderer();
const db = require('./db');

server.get('/admin', (req, res) => {

    const app = new Vue({
        data: {
            url: req.url,
            message: 'Hello Vue Admin Panel',
        },
        template: require('fs').readFileSync('./admin/index.html', 'utf-8')
    });

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Внутренняя ошибка сервера');
            return
        }
        res.end(html)
    })
});

server.listen(8080,  () => {
    console.log('Express server start on port 8080');
});




// app.listen(process.env.PORT || config.port, () => {
//     console.log(`Express server start on port ${config.port} ...`)
// });

// const bodyParser = require('body-parser');
// const cors = require('cors');
// const morgan = require('morgan');

//const config = require('./config/config');
// app.use(morgan('combined'));
// app.use(bodyParser.json());
// app.use(cors());
