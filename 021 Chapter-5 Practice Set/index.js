// 1 

let array1=[1,2,3,4,5]
let a=Number.parseInt(prompt("Enter the number:"))

array1.push(a)

console.log(array1)

// 2

let array2=[]
let b;

do{
    b=Number.parseInt(prompt("Enter the number:"))
    array2.push(b)   
}while(b!=0)

console.log(array2)
console.log("Thanks for using the program.")

// 3

let array3=[3,4,50,3,60,790,8]

let array4=array3.filter((e)=>{
    return e%10==0
})

console.log(array4)

// 4

let array5=[3,4,50,3,60,790,8]

console.log(array5.map((value)=>{
    return value*value;
}))


// 5

let array6=[1,2,3,4,5,6,7,8]

console.log(array6.reduce((a,b)=>{
    return a*b;
}))