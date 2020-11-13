var request = require('request'); //http wrapped module

function requestWrapper(url, callback) {
    request.get(url, function (err, response) {
      if (err) {
        callback(err);
      }else{
        callback(null, response);             
      }      
    })
}


requestWrapper(url, function (err, response) {
    console.log(err, response)
})





var request = require('request');

function requestWrapper(url) {
  return new Promise(function (resolve, reject) { //returning promise
    request.get(url, function (err, response) {
      if (err) {
        reject(err); //promise reject
      }else{
        resolve(response); //promise resolve
      }
    })
  })
}


requestWrapper('http://localhost:8080/promise_request/1').then(function(response){
    console.log(response) //resolve callback(success)
}).catch(function(error){
    console.log(error) //reject callback(failure)
})
