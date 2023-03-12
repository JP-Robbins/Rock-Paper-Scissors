hud('Welcome to Rock, Paper, Scissors. Please make your selection.')


function cpuChoice () {
const choices = ["rock", "paper", "scissors"];
const getComputerInput= Math.floor(Math.random()* choices.length);
cpuAnswer = choices[getComputerInput];
//console.log(cpuAnswer)
return cpuAnswer;    
}



 function playRound (playerAnswer) { 
   if (playerscore>=5){
    hud('You Win!')
   } else if (cpuscore>=5){
    hud('You Lose...better luck next time.')
   } 
   else cpuChoice() 
    if (cpuAnswer==='rock'&& playerAnswer === 'scissors'){
        hud('You Lose! Rock beats Scissors.')
        cpuScore()
    }  else if (cpuAnswer==='scissors' && playerAnswer==='rock') {
        hud('You Win! Rock beats Scissors')
        playerScore()
    } else if (cpuAnswer==='paper'&&playerAnswer==='rock'){
        hud('You Lose! Paper beats Rock!')
        cpuScore()
    } else if (cpuAnswer==='rock'&& playerAnswer==='paper'){
        hud('You Win! Paper beats Rock!')
        playerScore()
    } else if (cpuAnswer==='scissors'&& playerAnswer==='paper'){
        hud('You Lose! Scissors beats Paper')
        cpuScore()
    } else if (cpuAnswer ==='paper' && playerAnswer==='scissors'){
        hud('You Win! Scissors beats Paper')
        playerScore()
    } else if (cpuAnswer===playerAnswer) {
        action = 'It\'s a Draw!'
    }
      
          
}


function rock() {
   let playerAnswer = 'rock';
   playRound('rock');
   
}

function paper() {
    let playerAnswer = 'paper';
    playRound('paper');
    //console.log(playerScore)
}

function scissors () {
    let playerAnswer = 'scissors';
    playRound('scissors');
    //console.log(playerScore)
}

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors')

rockbtn.addEventListener('click',rock)
paperbtn.addEventListener('click', paper)
scissorsbtn.addEventListener('click', scissors)

let player1score = document.querySelector('#player1')
let pcScore = document.querySelector('#cpu')

let playerscore = 0
let cpuscore = 0

player1score.textContent = playerscore
pcScore.textContent = cpuscore

function playerScore() { 
    playerscore = playerscore+1
    player1score.textContent =  playerscore  
}


function cpuScore() {
  cpuscore = cpuscore+1
   pcScore.textContent = cpuscore
}

function hud(action) {
const disp = document.querySelector('#actions')
disp.textContent = action
}