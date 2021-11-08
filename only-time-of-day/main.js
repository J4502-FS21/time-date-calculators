"use strict";

var timeHolder = document.getElementById("timeHolder");

/*This is how we set a time in JavaScript. If there is no value in the () after Date, then it picks right now, down to the current millisecond when the page is loading. */
var today = new Date();

/*We can use the getHours function that is built into JavaScript to get the specific hour of the day that it is in our time zone right now. It will be any number between 0 and 23. So if it's 9 in the morning right now, we would get 9. If it's 9 at night, we'd get 21. */
var specificHourOfTheDay = today.getHours();

/*Similarly, we can use the getMinutes function that is built into JavaScript to get the number of minutes. So if right now, it's 6:38, we'd get 38 for our specificMinuteOfTheDay variable. */
var specificMinuteOfTheDay = today.getMinutes();


/*This is a variable we will use shortly to determine whether the time is in the a.m. or in the p.m. */
var isItAMorPM;

/*The values in hour of the day can be as low as 0 or as high as 23. But in the United States, we only use numbers 1 through 12 when talking about time. So we will use JavaScript to help us determine what the clockFriendlyHourOfDay is. */
var clockFriendlyHourOfDay;

if (specificHourOfTheDay >= 12) {
  isItAMorPM = "p.m.";
  if (specificHourOfTheDay > 12) {
    /*We subtract 12 from the time because the U.S., most people are not familiar with considering times that are higher than 12. */
    clockFriendlyHourOfDay = specificHourOfTheDay - 12;
  } else {
    clockFriendlyHourOfDay = specificHourOfTheDay;
  }
} else {
  isItAMorPM = "a.m.";
  /*In this case, we know the number is less than 13, so we have no need to subtract 12 from it. In that case, the clockFriendlyHourOfDay variable can be the same as the specificHourOfTheDay variable's value. */
  clockFriendlyHourOfDay = specificHourOfTheDay;

  /*In the first hour of the day, JavaScript will say it is 0. We don't use that in time. We don't say, "It is 0:30 a.m." We would say it is 12:30 a.m. instead. */
  if (specificHourOfTheDay === 0) {
    clockFriendlyHourOfDay = 12;
  }
}

/* If the time is 7:08 a.m., JavaScript will return the specificMinuteOfTheDay has having a value of 8, rather than 08. We don't want just 8, because that would give our time as being 7:8 rather than 7:08. So we create this variable called clockFriendlyMinuteOfDay. */
var clockFriendlyMinuteOfDay;

if (specificMinuteOfTheDay > 10) {
  clockFriendlyMinuteOfDay = specificMinuteOfTheDay;
} else {
  clockFriendlyMinuteOfDay = "0" + specificMinuteOfTheDay;
}

/*This is going to create a string for us called timeRightNow, concatenating these values into a time, like 1:30 p.m. or 7:45 a.m., or so on. */
var timeRightNow = clockFriendlyHourOfDay + ":" + clockFriendlyMinuteOfDay + " " + isItAMorPM;

var greeting;
var timeOfDayMessage;

if (specificHourOfTheDay < 12) {
  greeting = "Good Morning!";
} else if (specificHourOfTheDay > 17) {
  greeting = "Good Evening!";
} else {
  greeting = "Hello!";
}

timeOfDayMessage = "<p>" + greeting + " It is " + timeRightNow + "</p>";

timeHolder.innerHTML = timeHolder.innerHTML + timeOfDayMessage;
