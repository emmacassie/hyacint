// a way to track the passage of time

// target time

// current time
fetch("https://ergast.com/api/f1/current/next.json")
  .then((response) => response.json())
  .then((data) => {
    const nextStart = new Date(
      data.MRData.RaceTable.Races[0].date +
        "T" +
        data.MRData.RaceTable.Races[0].time
    )
    const TARGET = nextStart.getTime()
    function getCurrentTime() {
      return Date.now()
    }

    function doThisEverySecond(fn) {
      setInterval(fn, 1000)
    }

    function calculateTimeLeft(current) {
      let timeDiff = TARGET - current
      const secondsFactor = 1000
      const minutesFactor = secondsFactor * 60
      const hoursFactor = minutesFactor * 60
      const daysFactor = hoursFactor * 24
      const daysRemaining = Math.floor(timeDiff / daysFactor)
      timeDiff = timeDiff - daysFactor * daysRemaining
      const hoursRemaining = Math.floor(timeDiff / hoursFactor)
      timeDiff = timeDiff - hoursRemaining * hoursFactor
      const minutesRemaining = Math.floor(timeDiff / minutesFactor)
      timeDiff = timeDiff - minutesRemaining * minutesFactor
      const secondsRemaining = Math.floor(timeDiff / secondsFactor)

      return `${daysRemaining} days : ${hoursRemaining} hours : ${minutesRemaining} minutes :  ${secondsRemaining} seconds`
    }

    function displayTimeLeft() {
      const currentTime = getCurrentTime()
      const timeLeft = calculateTimeLeft(currentTime)
      const element = window.document.querySelector("#time-goes-here")
      element.textContent = "Countdown: " + timeLeft
    }

    doThisEverySecond(displayTimeLeft)
  })
