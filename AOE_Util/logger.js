
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message){
        //  Send an HTTP request
        console.log(message);

        //  Raise an event
        this.emit('Logger Message: ', {
            id: 1,
            url: 'http://'
        });
    }
}

//  Export Logger Class
module.exports = Logger; 