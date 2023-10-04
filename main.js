let gameBoard=document.querySelector(".board");
let gameState=document.querySelector(".gameStatement");
let startButton=document.querySelector(".button");

let clickSound=new Audio("click12.aac");
let gameStart=new Audio("gamestart.mp3");
let wrongClick=new Audio("wrongclickTrimmed.wav");
let victoryAudio=new Audio("vicAud.mp3");
let tieSound=new Audio("tie.mp3");

let gamePlay=false;
let turn="X";
let count=1;
startButton.addEventListener("click",function(){
    if(gamePlay==false){
       gameStart.play();
        startButton.innerHTML=" Press to Restart"
        gameState.innerHTML=" X's turn";
        startButton.style.backgroundColor="red";
    }else{
       clearall();
       turn='X'
       startButton.innerHTML="Start";
       gameState.innerHTML="";
       count=1;
       startButton.style.backgroundColor="blue";
    }
   // console.log(gameplay)
   //clearall();
   gamePlay=!gamePlay;
  
})
gameBoard.addEventListener("click",function(event){
    //console.log(event.target);
    let block=event.target;
    //console.log(block.innerhtml);
    if(gamePlay==true && block.innerHTML==""){
        block.innerHTML=turn;
        count++;
      clickSound.play();
    
    if(turn=="X"){
        block.style.color='red';
        turn="0";
    }else{
        block.style.color='blue';
        turn="X";
    }
    gameState.innerHTML=turn+" 's turn";
    if(winnerCheaker()=='X'){
        gameState.innerHTML="X wins the Game";
        // gamePlay=false;
        // startButton.click();
        victoryAudio.play();
        resetingTheGame();
        
       
        
    }else if(winnerCheaker()=='0'){
        gameState.innerHTML="0 wins the game";
        // gamePlay=false;
        // startButton.click();
        victoryAudio.play();
       resetingTheGame();
        
       
       
    }else if(count==10){
        gameState.innerHTML="TIE";
        // gamePlay=false;
        // startButton.click();
        resetingTheGame();
       tieSound.play();
        
       
       
    }
   
}else{
    wrongClick.play();
}


})
function winnerCheaker(){
    let blockArray=document.querySelectorAll('.cell');
    if((blockArray[0].innerHTML=='X')&&(blockArray[1].innerHTML=='X') &&(blockArray[2].innerHTML=='X')||(blockArray[3].innerHTML=='X')&&(blockArray[4].innerHTML=='X')&&(blockArray[5].innerHTML=='X')||(blockArray[6].innerHTML=='X')&&(blockArray[7].innerHTML=='X')&&(blockArray[8].innerHTML=='X')||(blockArray[0].innerHTML=='X')&&(blockArray[3].innerHTML=='X')&&(blockArray[6].innerHTML=='X')||(blockArray[1].innerHTML=='X')&&(blockArray[4].innerHTML=='X')&&(blockArray[7].innerHTML=='X')||(blockArray[2].innerHTML=='X')&&(blockArray[5].innerHTML=='X')&&(blockArray[8].innerHTML=='X')||(blockArray[0].innerHTML=='X')&&(blockArray[4].innerHTML=='X')&&(blockArray[8].innerHTML=='X')||(blockArray[2].innerHTML=='X')&&(blockArray[4].innerHTML=='X')&&(blockArray[6].innerHTML=='X')){
        return "X";

    }else if((blockArray[0].innerHTML=='0')&&(blockArray[1].innerHTML=='0') &&(blockArray[2].innerHTML=='0')||(blockArray[3].innerHTML=='0')&&(blockArray[4].innerHTML=='0')&&(blockArray[5].innerHTML=='0')||(blockArray[6].innerHTML=='0')&&(blockArray[7].innerHTML=='0')&&(blockArray[8].innerHTML=='0')||(blockArray[0].innerHTML=='0')&&(blockArray[3].innerHTML=='0')&&(blockArray[6].innerHTML=='0')||(blockArray[1].innerHTML=='0')&&(blockArray[4].innerHTML=='0')&&(blockArray[7].innerHTML=='0')||(blockArray[2].innerHTML=='0')&&(blockArray[5].innerHTML=='0')&&(blockArray[8].innerHTML=='0')||(blockArray[0].innerHTML=='0')&&(blockArray[4].innerHTML=='0')&&(blockArray[8].innerHTML=='0')||(blockArray[2].innerHTML=='0')&&(blockArray[4].innerHTML=='0')&&(blockArray[6].innerHTML=='0')){
return "0";
    }else{
        return "1";
    }
}
function clearall(){
    let blockArraytwo=document.querySelectorAll('.cell');
    for(let i=0; i<blockArraytwo.length;i++){
        blockArraytwo[i].innerHTML="";
    }

}
function resetingTheGame(){
    gamePlay=false;
    startButton.innerHTML="Starting..."
    startButton.disabled=true;

    setTimeout(() => {
        startButton.disabled=false;
        //startButton.click() 
        clearall();
        startButton.innerHTML="Start";
        gameState.innerHTML="";
        count=1;
        turn='X';
        startButton.style.backgroundColor="blue";

     }, 3000);
}