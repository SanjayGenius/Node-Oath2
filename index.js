const port = 8094
require('./eurekahelper/eureka-helper').registerWithEureka('login-service', port);
const mySqlConnection = require('./dbConfig/sqlConfig')
const accessTokenDBHelper = require('./dbConfig/accessTokensDBHelper')(mySqlConnection)
const userDBHelper = require('./dbConfig/userDBHelper')(mySqlConnection)
const oAuthModel = require('./authorisation/accessTokenModel')(userDBHelper, accessTokenDBHelper)
const oAuth2Server = require('node-oauth2-server')
const express = require('express')
const expressApp = express()
expressApp.oauth = oAuth2Server({
  model: oAuthModel,
  grants: ['password'],
  debug: true
  
})

const dashboardRoutesMethods=require('./dashboard/dashboardRoutesMethods.js')
const authRoutesMethods = require('./authorisation/authRoutesMethods')(userDBHelper)
const authRoutes = require('./authorisation/authRoutes')(express.Router(), expressApp, authRoutesMethods)
const dashboradRoutes = require('./dashboard/dashboardRoutes')(express.Router(), expressApp, dashboardRoutesMethods)
const bodyParser = require('body-parser')



//set the bodyParser to parse the urlencoded post data
expressApp.use(bodyParser.urlencoded({ extended: true }))

//set the oAuth errorHandler
expressApp.use(expressApp.oauth.errorHandler())

//set the authRoutes for registration and & login requests
expressApp.use('/auth', authRoutes)

//set the restrictedAreaRoutes used to demo the accesiblity or routes that ar OAuth2 protected
expressApp.use('/dashboard', dashboradRoutes)


//init the server
expressApp.listen(port, () => {

   console.log(`listening on port ${port}`)
})