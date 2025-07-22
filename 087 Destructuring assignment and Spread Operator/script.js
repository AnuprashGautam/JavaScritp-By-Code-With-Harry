let arr=[1,2,3,4,5,6,7];

let [a,b,c,d,e]=arr;
console.log(a,b,c,d,e);

// ***********************************************

let [x,y,,,...z]=arr;
console.log(x,y,z);

// ***********************************************

let arr1=['Anuprash', 'Gautam'];

let obj1={...arr1};
console.log(obj1);

// ***********************************************

let employee={
    ename:'Rahul',
    erole:'SDE'
}

console.log({...employee,ename:'Anuprash',erole:'Senior'});
console.log({ename:'Anuprash',erole:'Senior',...employee});