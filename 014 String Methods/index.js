let myString="Hello World"

console.log(myString.length)
console.log("Hello\n".length)
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

console.log(myString.slice(2,8))
console.log(myString.slice(2))

console.log(myString.replace("World","Universe"))

console.log(myString.concat("- this is the very first codding line of my program.", "Hello there!!!"))

console.log(myString[0])
console.log(myString[1])
console.log(myString[2])

for(a of myString){
    console.log(a)
}


let myString1="      hello      "
console.log(myString1.trim())