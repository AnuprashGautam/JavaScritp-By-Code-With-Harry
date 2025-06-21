// 1

const marksheet={
    "Anuprash":20,
    "Anirudh":45,
    "Radha":56,
    "Ujjwal":67
}

for (let i=0; i<Object.keys(marksheet).length; i++)
{
    console.log("The marks of ",Object.keys(marksheet)[i],"is :",marksheet[Object.keys(marksheet)[i]])
}


// 2

for (a in marksheet){
    console.log("The marks of ",a,"is :",marksheet[a])
}


// 3

const num = 20;
let guess = Number.parseInt(prompt("Enter your guess:"));

while (guess !== num) {
    if (guess < num) {
        alert("Too low!");
    } else {
        alert("Too high!");
    }
    guess = Number.parseInt(prompt("Try again:"));
}

alert("Congratulations! You guessed the number.");

// 4

const meanCalculator=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}

console.log("The mean of 20,30,40,50,60 is: ",meanCalculator(20,30,40,50,60))
console.log(typeof 10)