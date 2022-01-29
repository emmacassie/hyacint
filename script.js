const rootStar = document.querySelector('.star')
const sky = document.querySelector('.sky')
const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const starResizing = (star) => {
  const newSize = (Math.random() * 0.3).toFixed(2)
  const newScale = 'scale(' + newSize + ')'
  star.style.transform = newScale
  const intervalToResizeAgain = 100 + Math.floor(Math.random() * 500
  )
  setTimeout(() => {
    starResizing(star)
  }, intervalToResizeAgain)
}

const starFlickering = (star) => {
  const newOpacity = (Math.random() * 0.5).toFixed(2)
  star.style.opacity = newOpacity
  star.style.background = '#' + getRandomColor()
  const intervalToFlickerAgain = 100 + Math.floor(Math.random() * 5000
  )
  setTimeout(() => {
    starFlickering(star)
  }, intervalToFlickerAgain)
}

const getPosition = () => {
  const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;
  position = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height)
  }
  return position
}

const starDrifting = (star) => {
  const newPosition = getPosition()
  star.style.top = newPosition.y + 'px'
  star.style.left = newPosition.x + 'px'
  const intervalToDriftAgain = 10000 + Math.floor(Math.random() * 15000
  )
  setTimeout(() => {
    starDrifting(star)
  }, intervalToDriftAgain)
}

let starCount = 333

while (starCount) {
  const newStar = rootStar.cloneNode(true)
  newStar.style.display = 'block'
  newStar.style.top = getPosition().y + 'px'
  newStar.style.left = getPosition().x + 'px'
  sky.appendChild(newStar)
  starResizing(newStar)
  starFlickering(newStar)
  starDrifting(newStar)
  starCount--
}

const greetings = {
  morning: ["goodmorning", "hey early bird", "its good to see you", "rise and shine!",],
  afternoon: ["good afternoon", "good day", "hello u"],
  evening: ["good evening", "hope you've had a wonderful day", "hello"],
  night: ["hi u tiny bat", "sleep tight"],
};

let timeOfDay
let currentGreeting = "Hello";
const currentHour = new Date().getHours();
const currentMinute = new Date().getMinutes();
function getRandomGreeting(arr) {
  const randomNumber = Math.random();
  const arrayLength = arr.length;
  const randomIndex = Math.floor(randomNumber * arrayLength);
  return arr[randomIndex];
}
if (
  (currentHour >= 5 && currentHour < 12) ||
  (currentHour === 5 && currentMinute > 30)
) {
  timeOfDay = 'morning'
}
if (currentHour >= 12 && currentHour < 17) {
  timeOfDay = 'afternoon'
}
if (
  (currentHour >= 17 && currentHour < 23) ||
  (currentHour === 23 && currentMinute < 30)
) {
  timeOfDay = 'evening'
}
if (
  (currentHour >= 0 && currentHour < 5) ||
  (currentHour === 23 && currentMinute > 30)
) {
  timeOfDay = 'night'
}

greetingElement = document.querySelector("#special-greeting");
currentGreeting = getRandomGreeting(greetings[timeOfDay]);
greetingElement.innerHTML = `${currentGreeting} &lt;3`;

if (timeOfDay === 'morning' || timeOfDay === 'afternoon') {
  sky.classList.add('day')
} else {
  sky.classList.remove('day')
}
