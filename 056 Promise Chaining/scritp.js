let promise1=new Promise((resolve,reject)=>{
    let condition1=true;

    console.log("Promise1 is in PENDING STATE.");
    setTimeout(()=>{
        if(condition1){
            resolve("Promise1 successfully completed.");
        }else{
            reject("Promise1 got rejected.");
        }
    },2000)
});

promise1.then((value)=>{
    console.log(value);

    return new Promise((resolve,reject)=>{
        let condition2=true;

        console.log("Promise2 is in PENDING STATE.");
        setTimeout(()=>{
            if(condition2)
            {
                resolve("Promise2 successfully completed.");
            }else{
                reject("Promise2 got rejected.");
            }
        },2000);
    })
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

console.log("Script adder-----------------------------------");

let scriptLoader=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement('script');
        script.src=src;
        script.onload=()=>{
            resolve(true);
        }

        script.onerror=()=>{
            reject(false);
        }
        document.body.appendChild(script);
    })
};

let result=scriptLoader("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
result.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});