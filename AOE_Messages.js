var url = 'http://someLoggingService.io/log';

function log(message){
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.endpoint = url;