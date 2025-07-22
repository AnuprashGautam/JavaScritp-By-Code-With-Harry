let pro=async()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am a promise and i take 4 second to resolve.");
    },4000);
})
};

(async function(){
    let a=await pro();
    console.log(a);

    let b=await pro();
    console.log(b);

    let c=await pro();
    console.log(c);
})();