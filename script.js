let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) =>{
const humanDifference = Math.abs(targetGuess - humanGuess);
const computerDifference = Math.abs(targetGuess - computerGuess);
return humanDifference <= computerDifference
}

const updateScore = winner =>{
  if (winner === 'human'){
    return humanScore;
  }else if (winner === 'computer'){
    return computerScore;
  }

const advanceRound = () => currentRoundNumber++;
}
