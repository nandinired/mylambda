<<<<<<< HEAD
var exec = require('child_process').exec;

var result = function(command, cb){
    var child = exec(command, function(err, stdout, stderr){
        if(err != null){
            return cb(new Error(err), null);
        }else if(typeof(stderr) != "string"){
            return cb(new Error(stderr), null);
        }else{
            return cb(null, stdout);
        }
=======
var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'The time in the Los Angeles now is: ' + currentTime.toString(),
>>>>>>> 5e06b16293712ce426edadadb6f8e7297ce83f9b
    });
}

exports.result = result;

#var time = require('time');
#exports.handler = (event, context, callback) => {
#    var currentTime = new time.Date();
#    currentTime.setTimezone("America/Los_Angeles");
#    callback(null, {
#        statusCode: '200',
#        body: 'The time in the Los Angeles is: ' + currentTime.toString(),
#    });
#};
