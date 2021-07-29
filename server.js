// Dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const path = require("path");
require('dotenv').config();


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3080;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
    // Tells our session to use cookies

  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Add routes, both API and view
app.use(routes);


// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });

