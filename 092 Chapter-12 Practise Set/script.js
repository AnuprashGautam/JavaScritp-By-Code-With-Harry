// Question-1

let printHelloWorld =async (s)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(s);
        },2000)
    })
}

(
  async () => {
    let text = await printHelloWorld("Hello");
    console.log(text);
    text = await printHelloWorld("World");
    console.log(text);
  }
)();


// Ouestion-2

let arr=[1,2,3,4,5];

let avg=(a,b,c,d,e)=>{
    let total=a+b+c+d+e;
    
    return total/5;
}

let a=avg(...arr);
console.log(a);


// Ouestion-3

let myFun=(n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('This line got executed after',n,'seconds.');
        },n*1000);
    })
}

(async ()=>{
    let a = await myFun(4);
    console.log(a);
    let b= await myFun(5);
    console.log(b);
})();


// Ouestion-4

function calculateSimpleInterest(p,r,t){
    return (p*r*t)/100;
}

console.log(`The interest for 100 rupees for 2 years on 8% rate is:`,calculateSimpleInterest(100,8,2));



