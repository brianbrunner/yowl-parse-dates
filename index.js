var chrono = require('chrono-node');

module.exports = function(context, event, next) {
  var dates;
  event.parseDates = function() {
    if (!dates) {
      if (this.message) {
        dates = chrono.parse(this.message);
      } else {
        dates = [];
      }
    }
    return dates;
  }
  next();
}
