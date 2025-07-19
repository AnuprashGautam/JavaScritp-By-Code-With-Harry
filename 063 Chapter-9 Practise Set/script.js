// Ouestion-1,2 ----------------------------------------------------------

// let loadScript=async (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script=document.createElement('script');
//         script.src=src;

//         script.onload=()=> resolve(`The script ${src} has been loaded successfully.`);
//         script.onerror=()=> reject('The script has been rejected.');

//         document.body.appendChild(script);
//     });
// };


// loadScript('new.js')
//      .then((value)=>{console.log(value);})
//      .catch((error)=>{console.log(error)});

// (async () => {
//     try {
//         let result = await loadScript('new.js');
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// })();



// Ouestion-3 ------------------------------------------------------------

// async function threeSecondLife(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("Your request has been rejected.");
//         },3000);
//     });
// }


// (async ()=>{
//     try{
//         threeSecondLife();
//     }catch(error){
//         console.log('Something went wrong :',error);
//     }
// })();


// Ouestion-4 ------------------------------------------------------------

let promise1 = () => new Promise(resolve => setTimeout(() => resolve(10), 2000));
let promise2 = () => new Promise(resolve => setTimeout(() => resolve(20), 1000));
let promise3 = () => new Promise(resolve => setTimeout(() => resolve(30), 4000));
let promise4 = () => new Promise(resolve => setTimeout(() => resolve(40), 3000));


(async () => {
    try {
        console.time(); // Start timer

        let p1 = await promise1(); // waits for promise1 to resolve
        let p2 = await promise2(); // then waits for promise2
        let p3 = await promise3(); // then waits for promise3
        let p4 = await promise4(); // then waits for promise4

        console.log(p1, p2, p3, p4);
        console.timeEnd(); // End timer
    } catch (error) {
        console.log("Something went wrong:", error);
    }
})();




