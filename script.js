const rootStar = document.querySelector(".star")
const sky = document.querySelector(".sky")
const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16)

const starResizing = (star) => {
  const newSize = (Math.random() * 0.3).toFixed(2)
  const newScale = "scale(" + newSize + ")"
  star.style.transform = newScale
  const intervalToResizeAgain = 100 + Math.floor(Math.random() * 500)
  setTimeout(() => {
    starResizing(star)
  }, intervalToResizeAgain)
}

const starFlickering = (star) => {
  const newOpacity = (Math.random() * 0.5).toFixed(2)
  star.style.opacity = newOpacity
  star.style.background = "#" + getRandomColor()
  const intervalToFlickerAgain = 100 + Math.floor(Math.random() * 5000)
  setTimeout(() => {
    starFlickering(star)
  }, intervalToFlickerAgain)
}

const getPosition = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  position = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  }
  return position
}

const starDrifting = (star) => {
  const newPosition = getPosition()
  star.style.top = newPosition.y + "px"
  star.style.left = newPosition.x + "px"
  const intervalToDriftAgain = 10000 + Math.floor(Math.random() * 15000)
  setTimeout(() => {
    starDrifting(star)
  }, intervalToDriftAgain)
}

let starCount = 333

const greetings = {
  morning: [
    "goodmorning",
    "hey early bird",
    "its good to see you",
    "rise and shine!",
  ],
  afternoon: ["good afternoon", "good day", "hello u"],
  evening: ["good evening", "hope you've had a wonderful day", "hello"],
  night: ["hi u tiny bat", "sleep tight"],
}

let currentGreeting = "Hello"
let timeOfDay
let dayOrNightSky
function getRandomGreeting(arr) {
  const randomNumber = Math.random()
  const arrayLength = arr.length
  const randomIndex = Math.floor(randomNumber * arrayLength)
  return arr[randomIndex]
}
function getTimeOfDay() {
  const currentHour = new Date().getHours()
  const currentMinute = new Date().getMinutes()
  if (
    (currentHour >= 5 && currentHour < 12) ||
    (currentHour === 5 && currentMinute > 30)
  ) {
    return "morning"
  }
  if (currentHour >= 12 && currentHour < 17) {
    return "afternoon"
  }
  if (
    (currentHour >= 17 && currentHour < 23) ||
    (currentHour === 23 && currentMinute < 30)
  ) {
    return "evening"
  }
  if (
    (currentHour >= 0 && currentHour < 5) ||
    (currentHour === 23 && currentMinute > 30)
  ) {
    return "night"
  }
}

function createHeaven(time) {
  if (time === "morning" || time === "afternoon") {
    dayOrNightSky = "daySky"
    sky.classList.add("day")
  } else {
    sky.classList.remove("day")
    dayOrNightSky = "nightSky"
  }
}

timeOfDay = getTimeOfDay()

createHeaven(timeOfDay)

const nightSkyInDayTime = () =>
  dayOrNightSky === "nightSky" &&
  ["morning", "afternoon"].includes(getTimeOfDay())

const daySkyInNightTime = () =>
  dayOrNightSky === "daySky" && ["evening", "night"].includes(getTimeOfDay())

let greetingElement = document.querySelector("#special-greeting")

function displayGreeting(element) {
  currentGreeting = getRandomGreeting(greetings[timeOfDay])
  element.innerHTML = `${currentGreeting} &lt;3`
}

displayGreeting(greetingElement)

// ==============================================================================================start typing magic <<<

const typewriterAnimation = document.createElement("style")
// each character is 24px wide for fontsize 32px only works cos its mono font face
const animationDistance = greetingElement.textContent.length * 22
const animationDuration = greetingElement.textContent.length / 3
const rules = document.createTextNode(
  `
    #special-greeting{
      animation: typing ${animationDuration}s steps(117, end), blink-caret 0.5s step-end infinite
    }
      
    @-webkit-keyframes typing {
      from {width: 0;}
      to {width: ${animationDistance}px;}
    }
  `
)
typewriterAnimation.appendChild(rules)
document.getElementsByTagName("head")[0].appendChild(typewriterAnimation)
const container = document.querySelector("main")

function handleOverflow() {
  if (
    greetingElement.offsetWidth >= container.offsetWidth &&
    greetingElement.style.right !== "0px"
  ) {
    greetingElement.style.right = "0px"
  }
}
handleOverflow()

new ResizeObserver(handleOverflow).observe(greetingElement)

// ==============================================================================================end typing magic <<<

setInterval(() => {
  const skyShouldChange = nightSkyInDayTime() || daySkyInNightTime()
  if (skyShouldChange) {
    timeOfDay = getTimeOfDay()
    createHeaven(timeOfDay)
    displayGreeting(greetingElement)
  }
}, 1000)

const nextStarSpunsIn = () => 2222 + Math.ceil(Math.random() * 2222)
const spunStars = () => {
  if (starCount) {
    const newStar = rootStar.cloneNode(true)
    newStar.style.display = "block"
    newStar.style.top = getPosition().y + "px"
    newStar.style.left = getPosition().x + "px"
    sky.appendChild(newStar)
    starResizing(newStar)
    starFlickering(newStar)
    starDrifting(newStar)
    starCount--
    setTimeout(spunStars, nextStarSpunsIn())
  }
}
setTimeout(spunStars, nextStarSpunsIn())

setTimeout(() => {
  try {
    const btn =
      document.querySelector(".flooper-btn") ||
      document.querySelector(".flooper-btn-bingo")
    btn.style.opacity = 0
    btn.style.cursor = "help"
    btn.setAttribute("href", "#")
  } catch (error) {
    console.log("caught  ---->>> ", { error })
  }
}, 5000)
