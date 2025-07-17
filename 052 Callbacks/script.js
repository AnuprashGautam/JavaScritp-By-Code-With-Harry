// Synchronous Actions ---------------------------

// alert("This is the first action.");
// alert("This is the second action.");
// alert("This is the third action.");

// Asynchronous Actions --------------------------

// alert('This is the starting action.');
// setTimeout(
//     function(){
//         alert('This is the action in somewhere between starting and ending action.');
//     },5000
// );

// alert('This is the ending action.');

// Callbacks ------------------------------------

function firstCallbackMethod(error,script){
    if(error)
    {
        console.log("ERROR ENCOUNTERED :");
        console.log(error);
        return;
    }
    console.log("Hello I am the first method. And , your scritp is loaded successfully :"+script)
}

function secondCallbackMethod(error,script){
    if(error)
    {
        console.log("ERROR ENCOUNTERED :");
        console.log(error);
        return;
    }
    console.log("Hello I am the second method. And , your scritp is loaded successfully :"+script)
}

function loadScript(src,callback){
    const script=document.createElement('script');
    script.src=src;

    script.onload=()=>{
        console.log("The script got loaded successfully :"+src);
        callback(null, src);
    }

    script.onerror=()=>{
        console.log("SOMETHING WENT WRONG WITH THIS SCRIPT:"+src);
        callback(new Error(),src);
    }

    document.body.appendChild(script);
}

// Calling the loadScript method with different callback methods.

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", firstCallbackMethod);
loadScript("https://cdn.jselivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", secondCallbackMethod);



