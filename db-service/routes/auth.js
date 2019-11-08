module.exports =  (router, expressApp,authMethods) => {

   
    router.get('/getUserList', authMethods.getUserList)
    router.get('/saveAccessToken', authMethods.saveAccessToken)
    router.post('/registerUser',authMethods.registerUser)
    router.post('/login',authMethods.login)
    router.get('/getUser',authMethods.getUser)

    return router
}


