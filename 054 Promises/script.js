let makeToast=new Promise((resolve, reject)=>{
    let toasterWorking=true;

    setTimeout(()=>{
        if(toasterWorking)
        {
            resolve("The toast is ready.");
        }else{
            reject("Something went wrong.");
        }
    },2000);
});

makeToast
    .then((message)=>{
        console.log("Success:"+message);
    })
    .catch((error)=>{
        console.log("Error:"+error);
    });