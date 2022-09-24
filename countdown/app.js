const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timeUnits = document.querySelectorAll(".time-unit");

let futureDate = new Date(2023, 3, 25, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

/* Because futureDate.getDay() returns an integer value, it can be used to access a value in an array - so instead of using weekdays[3], we can use weekdays[futureDate.getDay()] */

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am.`;

// futureDate in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();

  // Remaining time in ms
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // Calculate all values
  let days = Math.floor(t / oneDay);
  // returns a leftover of how many full days there are
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMin);
  let secs = Math.floor((t % oneMin) / 1000);

  // Add the values to an array
  const values = [days, hours, mins, secs];

  // Format the time display so that when the values are less than 10, a "0" is added in front
  function addZero(timeUnit) {
    if (timeUnit < 10) {
      return (timeUnit = `0${timeUnit}`);
    }
    return timeUnit;
  }

  /* Loop through timeUnits (everything with class ".time-unit) and set its content to the value of the currently iterated binding from the array we created */
  timeUnits.forEach(function (timeUnit, index) {
    timeUnit.innerHTML = addZero(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired.</h4>`;
  }
}

// Countdown - the "getRemainingTime()" function is called every second
let countdown = setInterval(getRemainingTime, 1000);
