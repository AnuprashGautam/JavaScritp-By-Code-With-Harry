// setTimeout method

let a=Number.parseInt(prompt("Enter the first element:-"));
document.writeln("The first element is :",a);

let b=Number.parseInt(prompt("Enter the second element:-"));
document.writeln("The second element is :",b);

function sum(num1,num2) {
    document.writeln("The sum of ",num1," and ",num2," is: ",(num1+num2));
}

let timerId=window.setTimeout(sum,4000,a,b)

console.log(timerId)

window.clearTimeout(timerId)


// setInterval

let n=Number.parseInt(prompt("Enter the number:-"));

function printNum(num) {
    document.writeln("The number is : ",num)
}

let timerId1=window.setInterval(printNum,2000,n)
