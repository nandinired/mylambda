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
