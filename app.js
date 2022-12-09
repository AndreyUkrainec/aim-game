const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')


let time = 0
let score = 0

startBtn.addEventListener('click', (event)=> {
event.preventDefault()
screens[0].classList.add('up')
})


timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame(); 
    }
})


board.addEventListener('click', event => {
if(event.target.classList.contains('circle')){
score++
event.target.remove()

createRandomCirlce()
}
})





function startGame() {
    
    setInterval(decreaseTime, 1000)
    createRandomCirlce ()
timeEl.innerHTML = `00:${time}`
}


function decreaseTime() {
    if(time === 0){

        finishGame()

    } else{
        let current = --time
        if(current < 10){
            current = `0${current}`
        }
        timeEl.innerHTML = `00:${current}`  
    }
    
}


function finishGame(){
    timeEl.parentNode.classList.add('hide')
board.innerHTML = `<h1>Рахунок: <span class="primary">${score}</span></h1>`
}


function createRandomCirlce () {
const cirle = document.createElement('div')

const size = getRandomNumber(10, 60)
const {width, height} = board.getBoundingClientRect()
const x = getRandomNumber(0, width - size)
const y = getRandomNumber(0, height - size)



cirle.classList.add('circle')
cirle.style.width = `${size}px`
cirle.style.height = `${size}px`
cirle.style.top = `${y}px`
cirle.style.left = `${x}px`
board.append(cirle)
}


function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}




