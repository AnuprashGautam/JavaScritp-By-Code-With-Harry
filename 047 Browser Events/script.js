// 1. HTML Event Attribute

function notice(){
    alert("I was pressed.")
}

// 2. Using the DOM

let b=document.getElementById('btn')

b.onclick=function(){
    alert("This is the second alert.")
}

// 3. Using listeners

let b1=document.getElementById('btn1')

b1.addEventListener("click",function(){
    alert("This is the listner event.")
})

b1.addEventListener("click",function(e){
    console.log(e)
    alert("This is the second listner event.")
})



