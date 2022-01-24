// a way to track the passage of time

// target time

// current time

const TARGET = 1647788400000;
function getCurrentTime() {
  return Date.now();
}

function doThisEverySecond(fn) {
  setInterval(fn, 1000);
}

function calculateTimeLeft(current) {
  const timeDiff = TARGET - current;
  const secondsFactor = 1000;
  const minutesFactor = secondsFactor * 60;
  const hoursFactor = minutesFactor * 60;
  const daysFactor = hoursFactor * 24;
  const daysRemaining = Math.floor(timeDiff / daysFactor);
  const hoursRemaining = Math.floor((timeDiff % daysRemaining) / hoursFactor);
  const minutesRemaining = Math.floor(
    (timeDiff % hoursRemaining) / minutesFactor
  );
  const secondsRemaining = Math.floor(
    (timeDiff % minutesRemaining) / secondsFactor
  );

  return `${daysRemaining} days : ${hoursRemaining} hours : ${minutesRemaining} minutes : seconds ${secondsRemaining}`;
}

function displayTimeLeft() {
  const currentTime = getCurrentTime();
  const timeLeft = calculateTimeLeft(currentTime);
  const element = window.document.querySelector("#time-goes-here");
  element.textContent = timeLeft;
}

doThisEverySecond(displayTimeLeft);
