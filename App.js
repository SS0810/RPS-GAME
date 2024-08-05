let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#Computer");


const genCompChoice=() =>
{
    const options= ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () =>
{
    
    msg.innerText="Draw";
    msg.style.backgroundColor="#081b31";
};

const showWinner= (userWin, userChoice, compChoice) => 
{
    if (userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else
    {
        computerScore++;
        compScorePara.innerText=computerScore;
        
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
    }
};



const playGame= (userChoice) =>{
    
    //generate computer choice
    const compChoice= genCompChoice();
    
    
    if(userChoice === compChoice) { 
    
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin= compChoice==="paper" ? false: true;

        }else if(userChoice==="paper")
        {
            userWin= compChoice==="scissor" ? false:true;
        }
        else
        {
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }



};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice); 

    });
});
