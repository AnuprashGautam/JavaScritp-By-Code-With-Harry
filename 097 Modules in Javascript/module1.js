// Common JS Modules

const method1=()=>{
    console.log('Hello I am the first method of module1.');
}

const method2=(name)=>{
    console.log('Hello I am the advanced method and i can take input too:',name);
    
}

module.exports=method1;
// module.exports={method1,method2};