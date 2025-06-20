// 1

let age=prompt("Enter the age:")

if(age<=20 && age>=10)
{
    alert("The age is between 10 and 20.")
}
else
{
    alert("Your are not in the required age group.")
}

// 2

let weight=prompt("Enter the your weight:")
weight=Number.parseInt(weight)

switch (weight){
    case 120:
        alert("Your weight is 120.")
        break
    case 130:
        alert("Your weight is 130.")
        break
    case 140:
        alert("Your weight is 140.")
        break
    case 150:
        alert("Your weight is 150.")
        break
    case 160:
        alert("Your weight is 160.")
        break
    default:
        alert("Your are over-weight.")
}

// 3

let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}


// 5
let age1 = 19
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)