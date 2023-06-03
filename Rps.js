document.getElementById("rules-button").addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("rules-popup").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("rules-popup").style.display = "none";
  });


const choices = ["rock","paper","scissors"]
let compCount=parseInt(localStorage.getItem("computerScore")) || 0
let playerCount=parseInt(localStorage.getItem("playerScore")) || 0

 function playGame(playerchoice){
    const computerChoice= choices[Math.floor(Math.random()*3)]
    console.log("player choice:" ,playerchoice)
    console.log("computer choice:" ,computerChoice)

    if (playerchoice===computerChoice){
        document.getElementById("result").textContent="TIE UP"
        console.log("Tie up")
        if(playerchoice&&computerChoice==="rock"){
            document.getElementById("result").style.display="block"
            document.getElementById("btnscard").style.display="none"
            document.getElementById("replay").style.display = "block";
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieuprock1").style.display="block"
            document.getElementById("tieuprock2").style.display="block"

            document.getElementById("replay").addEventListener("click", function() {
                document.getElementById("btnscard").style.display= "block";
                document.getElementById("replay").style.display="none";
                document.getElementById("result").style.display="none"
                document.getElementById("tieuprock1").style.display="none"
                document.getElementById("tieuprock2").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";

              });
        }
        else if(playerchoice&&computerChoice==="paper"){
            document.getElementById("result").style.display="block"
            document.getElementById("btnscard").style.display= "none";
            document.getElementById("replay").style.display = "block";
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieuppaper1").style.display="block"
            document.getElementById("tieuppaper2").style.display="block"

            document.getElementById("replay").addEventListener("click", function() {
                document.getElementById("btnscard").style.display= "block";
                document.getElementById("replay").style.display="none";
                document.getElementById("result").style.display="none";
                document.getElementById("tieuppaper1").style.display="none"
                document.getElementById("tieuppaper2").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
              });

        }
        else{
            document.getElementById("result").style.display="block"
            document.getElementById("btnscard").style.display = "none";
            document.getElementById("replay").style.display = "block";
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieupscissor1").style.display="block"
            document.getElementById("tieupscissor2").style.display="block"

            document.getElementById("replay").addEventListener("click", function() {
                document.getElementById("btnscard").style.display="block"
                document.getElementById("replay").style.display="none"
                document.getElementById("result").style.display="none"
                document.getElementById("tieupscissor1").style.display="none"
                document.getElementById("tieupscissor2").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
              });
        }
        
        
    }
    else if ((playerchoice==="rock")&&(computerChoice==="scissors")||
    (playerchoice==="paper" && computerChoice==="rock")||
    (playerchoice=="scissors" && computerChoice==="paper")){
        console.log("player won")
        document.getElementById("result").textContent="YOU WON AGAINST PC"
        playerCount++
        if ((playerchoice==="rock") && (computerChoice==="scissors")){
            document.getElementById("result").style.display="block"
            document.getElementById("playAgain").style.display="block"
            document.getElementById("btnscard").style.display="none"
            document.getElementById("nextBtn").style.display="block"
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieuprock1").style.display="block";
            document.getElementById("tieupscissor2").style.display="block";

            document.getElementById("playAgain").addEventListener("click",function(){
                document.getElementById("btnscard").style.display="block"
                document.getElementById("playAgain").style.display="none"
                document.getElementById("nextBtn").style.display="none"
                document.getElementById("result").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieuprock1").style.display="none";
                document.getElementById("tieupscissor2").style.display="none";
            })

            document.getElementById("nextBtn").addEventListener("click",function(){
                document.getElementById("congratsPage").style.display="block";
                document.getElementById("scoreBoard").style.display="none"
                document.getElementById("playAgain").style.display="none";
                document.getElementById("nextBtn").style.display="none"
                document.getElementById("result").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieuprock1").style.display="none";
                document.getElementById("tieupscissor2").style.display="none";
            })

            document.getElementById("congratsPagePlayAgainBtn").addEventListener("click", function() {
                document.getElementById("scoreBoard").style.display="block"
                document.getElementById("btnscard").style.display="block"
                document.getElementById("congratsPage").style.display="none";

            });
        }
        else if((playerchoice==="paper")&&(computerChoice==="rock")){

            document.getElementById("result").style.display="block"
            document.getElementById("playAgain").style.display="block"
            document.getElementById("btnscard").style.display="none"
            document.getElementById("nextBtn").style.display="block"
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieuppaper1").style.display="block";
            document.getElementById("tieuprock2").style.display="block";

            document.getElementById("playAgain").addEventListener("click",function(){
                document.getElementById("btnscard").style.display="block"
                document.getElementById("playAgain").style.display="none"
                document.getElementById("nextBtn").style.display="none"
                document.getElementById("result").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieuppaper1").style.display="none";
                document.getElementById("tieuprock2").style.display="none";
            })

            document.getElementById("nextBtn").addEventListener("click",function(){
                document.getElementById("congratsPage").style.display="block";
                document.getElementById("scoreBoard").style.display="none"
                document.getElementById("playAgain").style.display="none";
                document.getElementById("nextBtn").style.display="none"
                document.getElementById("result").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieuppaper1").style.display="none";
                document.getElementById("tieuprock2").style.display="none";
            })

            document.getElementById("congratsPagePlayAgainBtn").addEventListener("click", function() {
                document.getElementById("scoreBoard").style.display="block"
                document.getElementById("btnscard").style.display="block"
                document.getElementById("congratsPage").style.display="none";

            });
        }
        else{

            document.getElementById("result").style.display="block"
            document.getElementById("playAgain").style.display="block"
            document.getElementById("btnscard").style.display="none"
            document.getElementById("nextBtn").style.display="block"
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieupscissor1").style.display="block";
            document.getElementById("tieuppaper2").style.display="block";

            document.getElementById("playAgain").addEventListener("click",function(){
                document.getElementById("btnscard").style.display="block"
                document.getElementById("playAgain").style.display="none"
                document.getElementById("nextBtn").style.display="none"
                document.getElementById("result").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieupscissor1").style.display="none";
                document.getElementById("tieuppaper2").style.display="none";
            })

            document.getElementById("nextBtn").addEventListener("click",function(){
                document.getElementById("congratsPage").style.display="block";
                document.getElementById("scoreBoard").style.display="none"
                document.getElementById("playAgain").style.display="none";
                document.getElementById("nextBtn").style.display="none"
                document.getElementById("result").style.display="none"
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieupscissor1").style.display="none";
                document.getElementById("tieuppaper2").style.display="none";
            })

            document.getElementById("congratsPagePlayAgainBtn").addEventListener("click", function() {
                document.getElementById("scoreBoard").style.display="block"
                document.getElementById("btnscard").style.display="block"
                document.getElementById("congratsPage").style.display="none";

            });
        }

    }
    else{
        console.log("computer won")
        document.getElementById("result").textContent="YOU LOST AGAINST PC"
        compCount++
        if((playerchoice==="rock")&&(computerChoice==="paper")){

            document.getElementById("result").style.display="block"
            document.getElementById("playAgain").style.display="block"
            document.getElementById("btnscard").style.display="none"
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieuprock1").style.display="block";
            document.getElementById("tieuppaper2").style.display="block";

            document.getElementById("playAgain").addEventListener("click", function() {
                document.getElementById("btnscard").style.display="block"
                document.getElementById("playAgain").style.display="none";
                document.getElementById("result").style.display="none";
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieuprock1").style.display="none";
                document.getElementById("tieuppaper2").style.display="none";
            });
        }
        else if((playerchoice==="scissors")&&(computerChoice==="rock")){
          
            document.getElementById("result").style.display="block"
            document.getElementById("playAgain").style.display="block"
            document.getElementById("btnscard").style.display="none"
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieupscissor1").style.display="block";
            document.getElementById("tieuprock2").style.display="block";

            document.getElementById("playAgain").addEventListener("click", function() {
                document.getElementById("btnscard").style.display="block"
                document.getElementById("playAgain").style.display="none";
                document.getElementById("result").style.display="none";
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieupscissor1").style.display="none";
                document.getElementById("tieuprock2").style.display="none";
            });

        }
        else{
            document.getElementById("result").style.display="block"
            document.getElementById("playAgain").style.display="block"
            document.getElementById("btnscard").style.display="none"
            document.getElementById("youPicked").style.display="block";
            document.getElementById("pcPicked").style.display="block";
            document.getElementById("tieuppaper1").style.display="block";
            document.getElementById("tieupscissor2").style.display="block"; 

            document.getElementById("playAgain").addEventListener("click", function() {
                document.getElementById("btnscard").style.display="block"
                document.getElementById("playAgain").style.display="none";
                document.getElementById("result").style.display="none";
                document.getElementById("youPicked").style.display="none";
                document.getElementById("pcPicked").style.display="none";
                document.getElementById("tieuppaper1").style.display="none";
                document.getElementById("tieupscissor2").style.display="none";
            });

        }
        
    }
    updateScores()
    saveScores()

 }
 function saveScores() {
    localStorage.setItem('playerScore', playerCount);
    localStorage.setItem('computerScore', compCount);
  }
function updateScores(){
    document.getElementById("computerScore").textContent=compCount
    document.getElementById("urScore").textContent=playerCount

}

document.getElementById("rock").addEventListener("click", function() {
    playGame("rock")
});
document.getElementById("paper").addEventListener("click", function() {
    playGame("paper")
});
document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors")
});
updateScores()