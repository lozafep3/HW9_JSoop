function clock() {
    function Clock(timezone, id, format) {
        document.getElementById(id).onclick = function () {
            format = !format;
        };

        this.draw = function () {
            document.getElementById(id).innerHTML = this.getTime(timezone, format);
        };
    }

    //Set new timezones here:
    var timeUTC = new Clock(-2, 'time_utc', true);
    var timeCET = new Clock(-1, 'time_cet', true);
    var timeUTC2 = new Clock(0, 'time_utc2', true);

    Clock.prototype.getTime = function getTime(timezone, format) {
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

        if (format === true) {
            return cHours + ':' + cMinutes + ':' + cSeconds;
        } else {
            return cHours + ':' + cMinutes;
        }
    };

    setInterval(function () {
        timeUTC.draw();
        timeCET.draw();
        timeUTC2.draw();
    }, 1000);
}

clock();