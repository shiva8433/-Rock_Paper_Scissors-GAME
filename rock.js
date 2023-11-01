let score=JSON.parse(localStorage.getItem('score'))||{
  wins: 0,
  losses: 0,
  tie: 0,
};

updateScoreElement(); 

//!score -- true null   
//  if(!score){
//   score={
//     wins: 0,
//     losses: 0,
//     tie: 0,
//   }
//  }

//  for player move 
function playGame(playerMove){
const computerMove = pickComputerMove();
let result='';
//  for scissor player move 
if(playerMove === 'scissors'){
  if(computerMove ==='rock'){
    result='You Lose';
  }else if (computerMove ==='paper'){
    result= 'You Win'; 
  }else if(computerMove ==='scissors'){
    result='Tie';
  }
}

  //  for paper palyer move 
  else if (playerMove === 'paper'){
        if(computerMove ==='rock'){
          result='You Win';
        }else if (computerMove ==='paper'){
          result= 'Tie';
        }else if(computerMove ==='scissors'){
          result='You Lose';
        }
  }
  //for rock player move
  else if(playerMove === 'rock'){
  if(computerMove ==='rock'){
    result='Tie';
  }else if (computerMove ==='paper'){
    result= 'You lose';
  }else if(computerMove ==='scissors'){
    result='You Win';
  }
  }
  //for score updation
  if(result==='You Win'){
  score.wins= score.wins+1;

  }else if(result==='You Lose'){
  score.losses=score.losses+1;
  }else if(result==='Tie'){
  score.tie=score.tie+1;
  }
   
  
  //local storage Concept
  localStorage.setItem('score',JSON.stringify(score));
  

  updateScoreElement();

  document.querySelector('.js-result')
  .innerHTML= result;
   
  document.querySelector('.js-move').innerHTML= ` YOU
    <img src="image/${playerMove}-emoji.png" alt="" class="image">
    <img src="image/${computerMove}-emoji.png" alt="" class="image">
    computer`;
  }
  function updateScoreElement(){
    
 document.querySelector('.js-score')
 .innerHTML=`Wins:${score.wins} Losses:${score.losses} Tie:${score.tie} `;
  
  }
 // for computer randomaly choose z
 
function pickComputerMove(){
const randomNumber=Math.random();

if(randomNumber>=0 && randomNumber<1/3){
computerMove='rock';
}else if(randomNumber>=1/3&& randomNumber<2/3){
computerMove='paper';
}else if (randomNumber>=2/3 && randomNumber<1){
 computerMove='scissors';
}
return computerMove;
}