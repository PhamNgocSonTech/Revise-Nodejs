const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine, create } = require('express-handlebars');
const path = require('path');
const newsRoute = require('./routes/NewsRoute.js');
const siteRoute = require('./routes/SiteRoute.js');
const courseRoute = require('./routes/CourseRoute.js');
const meRoute = require('./routes/MeRoute.js');
const methodOverride = require('method-override');
const { sortMiddleware } = require('./middleware/SortMiddleware.js');

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
app.use(methodOverride('_method'));

//template engine
const hbs = create({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

// Custom Middleware
app.use(sortMiddleware);

// Routes
app.use('/api', newsRoute);
app.use('/', siteRoute);
app.use('/courses', courseRoute);
app.use('/me', meRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
