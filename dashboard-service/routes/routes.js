var appRouter = function(app) {
    app.get("/dashboard", function(req,res) {
            res.send("SUCCESS");
    });
}

module.exports = appRouter;