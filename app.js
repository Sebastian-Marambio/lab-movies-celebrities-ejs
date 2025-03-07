// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')
const router = require('./routes/celebrities.routes')
const app = express()



// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app)

// default value for title local
const projectName = 'lab-movies-celebrities'
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase()

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`

// 👇 Start handling routes here
const index = require('./routes/index')
app.use('/', index)

const movieRoutes = require('./routes/movies.routes.js')
app.use('/movies', movieRoutes)

const celebrityRoutes = require('./routes/celebrities.routes.js')
app.use('/celebrities', celebrityRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app;
