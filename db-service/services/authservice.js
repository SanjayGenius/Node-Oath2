var connection=require('../sqlconfig/config')
var authDAO=require("../dao/authDAO");
module.exports =  {
	getUserList: getUserList,
	registerUser:registerUser,
	getUser:getUser,
	login:login,
	saveAccessToken:saveAccessToken,
	doesUserExist:doesUserExist
}

function getUserList(req,res){
	authDAO.getUserList().then(function (response){
		res.send(response);
	});
}
function registerUser(req,res){
	console.log("Query: "+req.body.query)
	authDAO.registerUser(req.body.query).then(function (response){
		res.send(response);
	});
}
function getUser(req,res){
	authDAO.executeSelectquery(req.body.query).then(function (response){
		res.send(response);
	});
}
function login(req,res){
	authDAO.executeSelectquery(req.body.query).then(function (response){
		res.send(response);
	});
}
function saveAccessToken(req,res){
	authDAO.executeSelectquery(req.body.query).then(function (response){
		res.send(response);
	});
}
function doesUserExist(username){
	let query="SELECT COUNT(username) FROM users where username='"+username+"';"
	authDAO.executeSelectquery(req.body.query).then(function (response){
		return response;
	});
}