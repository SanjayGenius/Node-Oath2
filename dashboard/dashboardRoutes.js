module.exports =  (router, expressApp, dashboardRoutesMethods) => {

    //route for entering into the restricted area.
    router.post('/view',  expressApp.oauth.authorise(), dashboardRoutesMethods.viewDashboard)

    return router
}
