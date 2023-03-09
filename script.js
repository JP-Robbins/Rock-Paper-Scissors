let playerScore = 0
let cpuScore = 0


function cpuChoice () {
const choices = ["rock", "paper", "scissors"];
const getComputerInput= Math.floor(Math.random()* choices.length);
cpuAnswer = choices[getComputerInput];
console.log(cpuAnswer)
return cpuAnswer;    
}

function playerChoice () {
let playInput = prompt('Choose your weapon. Rock, Paper, or Scissors.');
playerAnswer = playInput.toLowerCase();
return playerAnswer;
}

 function playRound () { 
      cpuChoice()
      playerChoice()
    if (cpuAnswer==='rock'&& playerAnswer === 'scissors'){
        console.log('You Lose! Rock beats Scissors.')
        cpuScore = cpuScore+1
    }  else if (cpuAnswer==='scissors' && playerAnswer==='rock') {
        console.log('You Win! Rock beats Scissors')
        playerScore = playerScore+1
    } else if (cpuAnswer==='paper'&&playerAnswer==='rock'){
        console.log('You Lose! Paper beats Rock!')
        cpuScore=CpuScore+1
    } else if (cpuAnswer==='rock'&& playerAnswer==='paper'){
        console.log('You Win! Paper beats Rock!')
        playerScore = playerScore+1
    } else if (cpuAnswer==='scissors'&& playerAnswer==='paper'){
        console.log('You Lose! Scissors beats Paper')
        cpuScore=cpuScore+1
    } else if (cpuAnswer==='paper '&& playerAnswer==='scissors'){
        console.log('You Win! Paper beats Scissors')
        playerScore=playerScore+1
    } else if (cpuAnswer===playerAnswer) {
        console.log('It\'s a Draw!')
    }}
  let i=0 ; 
 function game(){
   while ( i<5 ){
    playRound()
    console.log(playerScore)
    console.log(cpuScore)
    i++
   } 
   if (cpuScore>playerScore){
       alert('You Lose! Better luck next time.')
         
    } else if (playerScore>cpuScore){
       alert('You Win!') 
    } else if(playerScore==cpuScore) {
    alert('It\'s a Draw!')
}
    }
          

