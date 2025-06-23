const game={
    0:"Snake",
    1:"Water",
    2:"Gun"
};

let chances=5;
let uPoint=0;
let cPoint=0;

let cGuess=()=>{
    let guess=Number.parseInt(Math.random()*10)%3;
    
    return game[guess];
}

while(chances>0)
{
    let computer=cGuess();
    let user=prompt("Enter your guess:");
    
    if(computer==user)
    {
        alert(`Both guessed the same option!!! User=${uPoint}, and Computer=${cPoint}`)
    }
    else if(computer=="Snake" && user=="Water")
    {
        alert(`User=${uPoint}, and Computer=${++cPoint}`);
    }
    else if(computer=="Snake" && user=="Gun")
    {
        alert(`User=${++uPoint}, and Computer=${cPoint}`);
    }
    else if(computer=="Water" && user=="Snake")
    {
        alert(`User=${++uPoint}, and Computer=${cPoint}`);
    }
    else if(computer=="Water" && user=="Gun")
    {
        alert(`User=${uPoint}, and Computer=${++cPoint}`);
    }
    else if(computer=="Gun" && user=="Snake")
    {
        alert(`User=${uPoint}, and Computer=${++cPoint}`);
    }
    else if(computer=="Gun" && user=="Water")
    {
        alert(`User=${++uPoint}, and Computer=${++cPoint}`);
    }
    chances--;
}

if(cPoint>uPoint)
{
    alert(`Sorry!!! The computer won the match by `,cPoint-uPoint)
}else if(cPoint>uPoint)
{
    alert(`Congratulations!!! You won the match by `,uPoint-cPoint)
}else{
    alert("The game has tie.")
}