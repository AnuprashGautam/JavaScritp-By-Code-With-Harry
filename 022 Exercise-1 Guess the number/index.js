console.log("Welcome to the Guess the Number Game!!!")

const num=Number.parseInt(Math.random()*100);
let chances=100;
let guess;

while(chances>0)
{
    guess=Number.parseInt(prompt("Enter your guess:"));
    if(guess<num)
    {
        console.log("Guess the higher number.")
    }
    else if(guess>num)
    {
        console.log("Guess the lower number.")
    }
    else
    {
        console.log(`You guess the right number. The number was ${num} and your left chances are ${chances}.`)
        break;
    }
    chances--;
}

console.log("Thanks for using the game!!!")