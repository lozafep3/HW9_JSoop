
function Clock(timezone, id) {
    //this.format = 'hh:mm:ss';
    this.draw = function() {
        document.getElementById(id).innerHTML = this.getTime(timezone);
    }
}

//Set new timezones here:
var timeUTC = new Clock(-2, 'time_utc');
var timeCET = new Clock(-1, 'time_cet');
var timeUTC2 = new Clock(0, 'time_utc2');

Clock.prototype.getTime = function getTime(timezone) {
    var cDate = new Date(),
        cHours = cDate.getHours() + timezone,
        cMinutes = cDate.getMinutes(),
        cSeconds = cDate.getSeconds();

    if (cDate.getHours() < 10) {
        cHours = '0' + cDate.getHours() + timezone;
    }
    if (cDate.getMinutes() < 10) {
        cMinutes = '0' + cDate.getMinutes();
    }
    if (cDate.getSeconds() < 10) {
        cSeconds = '0' + cDate.getSeconds();
    }

    return cHours + ':' + cMinutes + ':' + cSeconds;
};

setInterval(function() {
    timeUTC.draw();
    timeCET.draw();
    timeUTC2.draw();
}, 1000);