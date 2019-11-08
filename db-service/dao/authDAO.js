var connection=require('../sqlconfig/config')
module.exports =  {
    getUserList: getUserList,
    registerUser:registerUser,
    executeSelectquery:executeSelectquery,
    getMessageAwait:getMessageAwait,
    executeDeletequery:executeDeletequery,
    executeUpdatequery:executeUpdatequery,
    executeInsertquery:executeInsertquery
  }
  function getUserList(){
    var query="Select * from users;"
    return new Promise((resolve, reject) => {
       connection.query(query).then((result)=> {
        resolve(result);
      });
    }).catch(function(error){
      console.log("Error while getting user list")
    })
  }
  function registerUser(){
    var sql = "INSERT INTO customers (name, address) VALUES ?";
  }
  //This method is for reference
  async function getMessageAwait(query){
    const rows = await connection.query("SELECT * from users");
    console.log(rows); //[ {val: 1}, meta: ... ]
  }
  function executeSelectquery(query){
    return new Promise((resolve, reject) => {
       connection.query(query).then((result)=> {
        resolve(result);
      });
    }).catch(function(error){
      console.log("Error while getting user list")
    })
  }
  function executeDeletequery(query){
    return new Promise((resolve, reject) => {
       connection.query(query).then((result)=> {
        resolve(result);
      });
    }).catch(function(error){
      console.log("Error while getting user list")
    })
  }
  function executeUpdatequery(query){
    return new Promise((resolve, reject) => {
       connection.query(query).then((result)=> {
        resolve(result);
      });
    }).catch(function(error){
      console.log("Error while getting user list")
    })
  }
  function executeInsertquery(query){
    return new Promise((resolve, reject) => {
       connection.query(query).then((result)=> {
        resolve(result);
      });
    }).catch(function(error){
      console.log("Error while getting user list")
    })
  }