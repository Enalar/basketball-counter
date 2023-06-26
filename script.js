let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

// LEADING TEAM

function whoIsLeading() {
    if (homeScore > guestScore) {
        homeScoreEl.style.color = "#80ed99"
        guestScoreEl.style.color = "#F94F6D"
    } else if (homeScore < guestScore) {
        guestScoreEl.style.color = "#80ed99"
        homeScoreEl.style.color = "#F94F6D"
    } else {
        homeScoreEl.style.color = "#8d99ae"
        guestScoreEl.style.color = "#8d99ae"
    }
}

// HOME'S SCORE

function add1ScoreToHome() {
    homeScore++
    homeScoreEl.innerText = homeScore
    whoIsLeading()
}

function add2ScoreToHome() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
    whoIsLeading()
}

function add3ScoreToHome() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
    whoIsLeading()
}

// GUEST'S SCORE

function add1ScoreToGuest() {
    guestScore++
    guestScoreEl.innerText = guestScore
    whoIsLeading()
}

function add2ScoreToGuest() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
    whoIsLeading()
}

function add3ScoreToGuest() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
    whoIsLeading()
}

// START A NEW GAME

function resetTheGame() {
    homeScore = 0
    homeScoreEl.innerText = homeScore
    guestScore = 0
    guestScoreEl.innerText = guestScore
    whoIsLeading()
}