let array=[100,233,455,342,677]

// forEach

array.forEach(
    (element)=>{
        console.log(element*element)
    }
)

// Array.from

let a="Hello World"
let array1=Array.from(a)
console.log(a)

// for .. of

for (let a1 of array1)
{
    console.log(a1)
}


// for .. in

for (let a2 in array1)
{
    console.log(a2)
}