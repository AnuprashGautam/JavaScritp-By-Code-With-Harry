try{
    console.log('I am the risky code and i am gonna make a error soon....');
    console.log(a);
}catch(error){
    console.log('My resoponsibilty is to handle the error',error);
}

console.log('These are the rest of the statements:');
console.log('Statement-1');
console.log('Statement-2');
console.log('Statement-3');
console.log('Statement-4');


console.log("-----------------------------------------------------------------");


try{
    console.log('I am good so far. I have a scheduled statement...');
    setTimeout(()=>{
        console.log('I am the risky of code that was scheduled and now i will crash your application. Hahahaha!!!!');
        console.log(b);
    }, 4000)
    
}catch(error){
    console.log('I did not checked the internal code of scheduled statement because is not my responsibility: ',error);
}
