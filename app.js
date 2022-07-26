const choiceButtons = document.querySelectorAll('[data-choice]');
const resultColumn = document.querySelector('[data-result-column]');
const playerScore = document.querySelector('[data-player-score]');
const computerScore = document.querySelector('[data-computer-score]');

const playerRound = document.querySelector('[data-player-round]');
const computerRound = document.querySelector('[data-computer-round]');
const choices = [
    {
        name: 'Jerry',
        img: src= 'imgs/choosingImgs/jerry norm.png',
        beats: 'Spike'
    },
    {
        name: 'Tom',
        img: src = 'imgs/choosingImgs/tom normal.png',
        beats:'Jerry'
    },
    {
       name: 'Spike',
       img: src='imgs/choosingImgs/Spike normal.jpeg',
       beats:'Tom' 
    }   

]

choiceButtons.forEach(choiceButton => { // checks for the name of the character the player has clicked on using the event listener and setting the name of the element to a variable
    choiceButton.addEventListener('click', e =>{
       const choiceName = choiceButton.dataset.choice
       const choice = choices.find (choice => choice.name === choiceName)
       makeChoice(choice)
    })
})
function makeChoice(choice){
    const computerChoice = randomChoice()
    const playerWinner = isWinner(choice, computerChoice)
    const computerWinner = isWinner(computerChoice, choice)

    addOutcome(computerChoice, computerWinner)
    addOutcome(choice, playerWinner)

    if (playerWinner) increaseScore(playerScore, playerRound)
    if(computerWinner) increaseScore(computerScore, computerRound) 

    
}
function increaseScore(scoreSpan, roundSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
    if (scoreSpan.innerText === '5'){
        resetScore(scoreSpan)
        roundSpan.innerText = parseInt(roundSpan.innerText) + 1
        
    }
}
function resetScore(scoreSpan){
    playerScore.innerText = '0';
    computerScore.innerText = '0';
}

function addOutcome(choice, winner){
    const div = document.createElement('div')
    div.innerText = choice.name
    div.classList.add('result-choice')
    if (winner) div.classList.add('winner')
    resultColumn.after(div)
}

function isWinner(choice, opponentChoice){
    return choice.beats === opponentChoice.name
}

function randomChoice(){
    const randomPicker = Math.floor(Math.random() * choices.length)
    return choices[randomPicker]
}


/* base code for rock paper scissors
let wins = 0;
        let losses = 0;
        

        function pcChoice (){ // function creates the pc's choice of either rock, paper, or scissors
            const choices = ["rock", "paper", "scissors"];
            const pcPicker = Math.floor(Math.random()*3);
            let computerChoice = SELECTIONS[pcPicker];
            return computerChoice;
        }

        function playRound(computerChoice){ // plays a round of rps
            
        
            let playerChoice = ('Rock, Paper, or Scissors?');
            const playerSelection = playerChoice.toLowerCase();
            
            if (playerSelection == "rock" && computerChoice == "paper" || playerSelection == "scissors" && computerChoice == "rock" || playerSelection == "paper" && computerChoice == "scissors") 
            {
                
                console.log("Pc Wins! "); losses++;
                
            }
            else if (playerSelection == "rock" && computerChoice == "scissors" || playerSelection == "scissors" && computerChoice == "paper" || playerSelection == "paper" && computerChoice == "rock")
            {
                
                console.log("You Win! "); 
                 wins++;
            }
            else if (playerSelection == computerChoice) {
                console.log("Draw! The player and PC picked the same choice!");
            }
            else {
                console.log("Invalid Choice! Try Again!");
            }
            
        }
        function game (){
            
            for (let i = 0; i < 5; i++){
                playRound(pcChoice());
                console.log('You have won: ' + wins + ' times');
                console.log('You have lost: ' + losses + ' times');
            }
            
            console.log("Game is Over! \nOverall the player won: " + wins +".\nThe PC won: " + losses);

        }
        console.log(game()); */