let promise1=new Promise((resolve,reject)=>{
    let success=true;

    setTimeout(()=>{
        if(success){
            resolve("Promise1 has successfully resolved.");
        }else{
            reject("Promise1 got rejected.");
        }
    },1000);
});


let promise2=new Promise((resolve,reject)=>{
    let success=true;

    setTimeout(()=>{
        if(success){
            resolve("Promise1 has successfully resolved.");
        }else{
            reject("Promise1 got rejected.");
        }
    },2000);
});


let promise3=new Promise((resolve,reject)=>{
    let success=true;

    setTimeout(()=>{
        if(success){
            resolve("Promise3 has successfully resolved.");
        }else{
            reject("Promise3 got rejected.");
        }
    },4000);
});


let promise4=new Promise((resolve,reject)=>{
    let success=false;

    setTimeout(()=>{
        if(success){
            resolve("Promise4 has successfully resolved.");
        }else{
            reject("Promise4 got rejected.");
        }
    },6000);
});


// all() method-----------------------------

/* Return the result if all the promises are being resolved, if anyone of them get rejected then it gives error. */

// let promise_all=Promise.all([promise1,promise2,promise3,promise4]);
// promise_all.then((value)=>{
//     console.log(value);
// });

// allSettled() method-----------------------------

/* Return the result no matter if any promise is getting rejected. */

// let promise_allSettled=Promise.allSettled([promise1,promise2,promise3,promise4]);
// promise_allSettled.then((value)=>{
//     console.log(value);
// });


// race()-------------------------------------------

/* It return the promise that is being resolved or rejected at the first place from all of them. */

// let promise_race=Promise.race([promise1,promise2,promise3,promise4]);
// promise_race.then((value)=>{
//     console.log(value);
// });

// any()-------------------------------------------

/* It return the promise that is being resolved ( not rejected) at the first place from all of them. And, if none of them got resolved then it will give us error. */

// let promise_any=Promise.any([promise1,promise2,promise3,promise4]);
// promise_any.then((value)=>{
//     console.log(value);
// });

// resolve()----------------------------------------

/* It resolve the promise. */

// let promise_resolve=Promise.resolve("resolve");
// promise_resolve.then((value)=>{
//     console.log(value);
// });

// reject()----------------------------------------

/* It resolve the promise. */

let promise_reject=Promise.reject(new Error("Hi this is error."));
promise_reject.catch((error)=>{
    console.log(error);
});

