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
        console.log(game()); 