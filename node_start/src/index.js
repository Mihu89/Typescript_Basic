const morning = require('./demo/morning');
const evening = require('./demo/evening');

module.exports ={
    getMorningMessage: function() {
        console.log(morning);
    },
    getEveningMessage: function() {
        console.log(evening);
    }
}
