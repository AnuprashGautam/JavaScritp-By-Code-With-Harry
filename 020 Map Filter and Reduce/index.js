let a=[10,20,30,40]

// map

let b=a.map((value,index,array)=>{
    console.log(value, index, array)
    return value*10
})

console.log(a)
console.log(b)

// filter

let c=a.filter((e)=>{
    return e<35
})

console.log(c)

// reduce

const reduceFunction=(h1,h2)=>{
    return h1+h2
}

let d=a.reduce(reduceFunction)
console.log(d)  // Returns a value