const assignedCards = new Set([])
const bingoList = [
  `Front row lock out`,
  `Crash in turn 1`,
  `Hamilton v Verstappen battle`,
  `LeClerc sets fastest lap`,
  `Commentator said “that’s a biggggg lock-up”`,
  `Successful undercut`,
  `360 degree spin`,
  `720 degree spin`,
  `Latifi crash `,
  `Grand Slam`,
  `Safety car comes out`,
  `Stroll drives aggressively `,
  `A reserve driver races`,
  `El Plan is executed`,
  `It starts to rain`,
  `A tire flies off`,
  `Gearbox issues`,
  `“Sorry guys” on radio after crash`,
  `Sainz outperforms LeClerc`,
  `[favorite driver] moves up 3 places`,
  `[favorite driver] crashes`,
  `[favorite driver] has 6+ second gap either side`,
  `[favorite driver] has 4+ second pit stop`,
  `[favorite driver] wins`,
  `Pole driver takes the win`,
  `Pole driver out of the race`,
  `Albon confirmed tire whisperer `,
  `Tsunoda and Gasly battle`,
  `Haas gets point(s)`,
  `Ricciardo fumbles points `,
  `Schumacher/Vettel bromance moment`,
  `5+ drivers DNF`,
  `Time penalty is given`,
  `Grid penalty is given`,
  `Driver is lapped by team mate`,
  `Pit restart`,
  `Overtaking/speeding in the pit lane`,
  `An animal on track`,
  `Perez: minister of defence `,
  `Alonso finishes ahead of Ocon`,
  `Blister!`,
  `Redbull has reliability issues `,
  `Russell finishes ahead of Hamilton`,
  `Toto talks to race control`,
  `Cool Steiner quote`,
  `Cars get lapped 2 times`,
  `“Lights out and away we go”`,
  `Driver doesn’t slow down under safety car`,
  `Commentator makes bad joke`,
  `Wet tires are used`,
  `3+ car crash`,
  `Norris has post-race interview and says something dumb`,
  `Williams gets points`,
  `Verstappen gets no points `,
  `McLaren in top 3`,
  `Podium with 3 different teams`,
  `Incident gets reviewed after race`,
  `Yuki says something food-related`,
]

// loop till 25
for (var i = 0; i < 25; i++) {
  // select grid cell node
  var cell = document.createElement("div")
  // clone and give height and width of 100px

  // add binho-cell class
  cell.classList.add("bingo-cell")
  // pick a random item from bringo list
  // if the itms has been assigned, pick another
  let randomItem = bingoList[Math.floor(Math.random() * bingoList.length)]
  while (assignedCards.has(randomItem)) {
    randomItem = bingoList[Math.floor(Math.random() * bingoList.length)]
  }
  // add the item to the set
  assignedCards.add(randomItem)

  // add the item to the cell
  cell.innerHTML = randomItem

  // append to grid
  document.querySelector(".bingo-grid-container").appendChild(cell)
}
