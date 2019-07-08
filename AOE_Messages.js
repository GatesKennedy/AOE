
const Logger = require('./AOE_Util/logger');
const logger = new Logger();

//  Register a listener
logger.on('Logger Message: ', (arg) => {
    console.log('Listener Called', arg);
});

logger.log('test message for logger.log()');
