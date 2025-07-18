let promise1=new Promise((resolve,reject)=>{
    let success=true;

    setTimeout(()=>{
        if(success){
            resolve("Your promise has successfully resolved.");
        }else{
            reject("Your promise got rejected.");
        }
    },2000);
});

// Attaching handler1

promise1.then((value)=>{
    console.log("then method of handler1:-"+value);
}).catch((error)=>{
    console.log("catch method of handler1:-"+error);
});

// Attaching handler2

promise1.then((value)=>{
    console.log("then method of handler2:-"+value);
}).catch((error)=>{
    console.log("catch method of handler2:-"+error);
});

// Attaching handler3

promise1.then((value)=>{
    console.log("then method of handler3:-"+value);
}).catch((error)=>{
    console.log("catch method of handler3:-"+error);
});

// Attaching handler4

promise1.then((value)=>{
    console.log("then method of handler4:-"+value);
}).catch((error)=>{
    console.log("catch method of handler4:-"+error);
});