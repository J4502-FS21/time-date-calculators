"use strict";

var timeHolder = document.getElementById("timeHolder");

/*This is how we set a time in JavaScript. If there is no value in the () after Date, then it picks right now, down to the current millisecond when the page is loading. */
var today = new Date();

/*This is setting the var thanksgivingBreakBegins to be the date of November 19, 2021 at 5:00 at night. Because it's night, and not morning, we add 12 hours to 5:00 to get 17:00. Feel free to plug in any date you want*/
var thanksgivingBreakBegins = new Date("November 19, 2021 17:00:00");

/*This will calculate how many milliseconds there are between today and thanksgivingBreakBegins. If thanksgivingBreakBegins is in the future, then distanceBetweenThenAndNow will be a positive number. If thanksgivingBreakBegins is in the past, then distanceBetweenThenAndNow will be a negative number. */
var distanceBetweenThenAndNow = thanksgivingBreakBegins - today;

/*We don't want to be working with negative amounts of time, so we will get the absolute value by running that through the Math.abs() function. That will convert any number to the positive version of itself. So, Math.abs(-11) returns 11, Math.abs(37) returns 37, and so on. */
var totalTime = Math.abs(distanceBetweenThenAndNow);

/*We calculate the number of minutes left by dividing by 1000 milliseconds and 60 seconds*/
var minutesLeft = totalTime/(1000 * 60);

/*We calculate the number of hours left by dividing the number of minutes left by 60 minutes*/
var hoursLeft = minutesLeft/60;

/*We won't be using days, but we could be! We would take the number of hours and divide that by 24. */
var daysLeft = hoursLeft/24;
console.log("Number of days until Thanksgiving Break begins: " + daysLeft);

var textForTime;
var ourMessageAboutTime;

if (hoursLeft > 1) {
  /*Setting toFixed to 2 will round our number of hours left to 2 decimal points. Go in and change it to see how that works*/
  textForTime = hoursLeft.toFixed(2) + " hours";
} else {
  textForTime = minutesLeft.toFixed(2) + " minutes";
}

if (distanceBetweenThenAndNow > 0) {
  ourMessageAboutTime = "<p>Thanksgiving Break begins in " + textForTime + "!</p>";
} else {
  ourMessageAboutTime = "<p>Thanksgiving Break began " + textForTime + " ago!</p>";
}

timeHolder.innerHTML = timeHolder.innerHTML + ourMessageAboutTime;
