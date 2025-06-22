// alert is used to just open the mini window.

alert("Please help us to write something on the page.")

// promt is to get the input from the user.

let input1=prompt("Enter your number:",100)
input1=Number.parseInt(input1)

alert(`You have enetered the number ${input1} and its type is ${typeof input1}`)

// confirm return true or false based on the user.

const c=confirm("Do you want to write something on the web page.")

if(c)
{
    document.write(`Hey you have successfully entered a number and it is ${input1} and its type is ${typeof input1}`)
}
else{
    document.write("Sorry, we are not able to write the inputted number here.")
}