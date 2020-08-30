const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./route/v1.route');
const mongoose = require('mongoose');

// mongoose.connect(`${environment.database.url}`, {
//     useNewUrlParser: true
// });
// mongoose.Promise = global.Promise;
// mongoose.connection.on('connected', () => console.log('Mongoose default connection open to ', environment.database.url));

const app = express();

// opening middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

// initializing port
const port = 3000;
app.listen(port, () => {
    console.log('listening in port ' + port);
});