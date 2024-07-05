const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const newsRoute = require('./routes/NewsRoute.js');
const siteRoute = require('./routes/SiteRoute.js');

// Init Static File
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
// app.use(morgan("combined"));

// Connect DB
const db = require('./configs/db/mongodb.js');
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

// Routes
app.use('/api', newsRoute);
app.use('/', siteRoute);
// app.use('/courses/', siteRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
