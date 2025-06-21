let array1=[1,2,3,4,5,6,7, "Anuprash", "Gautam"]

// delete operator

// The delete operator in JavaScript can remove an element from an array, but it leaves an empty slot (undefined) in the array, and the array's length remains unchanged. It's generally recommended to use methods like splice(), pop(), or shift() for more predictable array manipulation, as these methods adjust the array's length and reindex the elements. 

console.log(array1.length)
delete array1[1]
console.log(array1[1])
console.log(array1.length)

// concat()

let n=array1.concat([100,200,300],[300,400,500])
console.log(n)

// sort()

console.log(array1)
array1.sort()
console.log(array1)

let compare=(a,b)=>{
    return a-b
}
let compare1=(a,b)=>{
    return b-a
}

let array2=[23,43,545,2232,534,321]
console.log(array2.sort())  // Alpahbatecally
console.log(array2.sort(compare))  // Increasing Order
console.log(array2.sort(compare1))  // decreasing order


// splice()

let array3=[1,2,3,'a','b','c',7,8,9]
let n1=array3.splice(3,3,4,5,6)
console.log(n1)
console.log(array3)

// slice()

console.log(array1.slice(2))
console.log(array1.slice(2,4))

// slice()

let array4=[34,45,78]
array4.reverse()
console.log(array4)