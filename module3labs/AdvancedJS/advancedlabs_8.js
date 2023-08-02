// 8. The following DigitalClock class uses an interval to print the time every second once
//    started, until stopped.
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs, ms] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (ms < 10) ms = "0" + ms;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}:${ms}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
// const myClock = new DigitalClock("my clock:");
// myClock.start();
/*------------------------------------------------------------------------------------*/
// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
//    parameter precision – the number of ms between 'ticks'. This precision parameter
//    should default to 1 second if not supplied.
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix); //call parent constructor for prefix
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}
// const myClock2 = new PrecisionClock("my clock:",500);
// myClock2.start();
/*----------------------------------------------------------------------------------*/
// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
//    parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
//    should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
//    default to 07:00 if not supplied.
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix); //call parent constructor for prefix
    this.WakeUpHour = Number(wakeupTime.split(":")[0]);
    this.WakeUpMinute = Number(wakeupTime.split(":")[1]);
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs, ms] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (ms < 10) ms = "0" + ms;

    if (
      Number(hours) === this.WakeUpHour &&
      Number(mins) === this.WakeUpMinute
    ) {
      this.stop();  //If it is wakeup time, displaying the clock stops
      console.log(`Wake Up! It is ${hours}:${mins}`); //print final message
    } else {
      console.log(`${this.prefix} ${hours}:${mins}:${secs}:${ms}`);
    }
  }
}
const myClock3 = new AlarmClock("my clock:", "21:18");
myClock3.start();
