const assignedCards = new Set([])
const bingoList = [
  `Front row lock out`,
  `Crash in turn 1`,
  `Hamilton v Verstappen battle`,
  `LeClerc sets fastest lap`,
  `Commentator said “thats a biggggg lock-up”`,
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
  `Driver doesnt slow down under safety car`,
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
const answers = new Set()

const checkBingo = () => {
  console.log({ answers })
  let bingo = false
  if (answers.size < BINGO_SIZE) {
    return false
  }
  // check rows
  let rowChecker = -1
  let counter = 0
  answers.forEach((answer) => {
    let row = answer.split("_")[1]
    if (rowChecker > -1 && rowChecker !== row) {
      return
    }
    rowChecker = row
    counter++
  })
  if (counter === BINGO_SIZE) {
    bingo = true
  }

  // check columns
  let colChecker = -1
  let counter2 = 0
  answers.forEach((answer) => {
    let col = answer.split("_")[0]
    if (colChecker > -1 && colChecker !== col) {
      return
    }
    colChecker = col
    counter2++
  })
  if (counter2 === BINGO_SIZE) {
    bingo = true
  }

  // check diag-tl-br
  let counter3 = 0
  answers.forEach((answer) => {
    if (answer.split("_")[0] === answer.split("_")[1]) {
      counter3++
    }
  })
  if (counter3 === BINGO_SIZE) {
    bingo = true
  }

  // check diag-tr-bl
  let counter4 = 0
  answers.forEach((answer) => {
    if (
      parseInt(answer.split("_")[0]) + parseInt(answer.split("_")[1]) ===
      BINGO_SIZE - 1
    ) {
      counter4++
    }
  })
  if (counter4 === BINGO_SIZE) {
    bingo = true
  }

  return bingo
}
const BINGO_SIZE = 5

// loop till 25
for (var i = 0; i < BINGO_SIZE; i++) {
  const col = i
  for (var j = 0; j < BINGO_SIZE; j++) {
    const row = j
    // select grid cell node
    var cell = document.createElement("div")
    // clone and give height and width of 100px

    // add binho-cell class
    cell.classList.add("bingo-cell")
    // pick a random item from bingo list
    // if the itms has been assigned, pick another
    let randomItem = bingoList[Math.floor(Math.random() * bingoList.length)]
    while (assignedCards.has(randomItem)) {
      randomItem = bingoList[Math.floor(Math.random() * bingoList.length)]
    }
    // add the item to the set
    assignedCards.add(randomItem)

    // add the item to the cell
    cell.innerHTML = randomItem
    // add cell label add data attribute
    cell.setAttribute("data-label", `${row}_${col}`)
    // cell.addEventListener("click", function (e) {
    //   const _i = i
    //   const _j = j
    //   e.target.classList.add("bingo-cell-selected")
    //   answers.add(`${_i}_${_j}`)
    //   if (checkBingo()) {
    //     alert("BINGO")
    //   }
    // })

    // append to grid
    document.querySelector(".bingo-grid-container").appendChild(cell)
    document
      .querySelector(".bingo-grid-container")
      .addEventListener("click", function (e) {
        const el = e.target
        const data = el.getAttribute("data-label")
        answers.add(data)
        el.classList.add("bingo-cell-selected")
        if (checkBingo()) {
          document.querySelector(".winner-label").classList.remove("hidden")
        }
      })
  }
}
