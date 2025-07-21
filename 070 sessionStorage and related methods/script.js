sessionStorage.setItem('name','Anuprash');
sessionStorage.setItem('age',30);
console.log(sessionStorage.getItem('name'));
console.log(sessionStorage.key(1));
// sessionStorage.removeItem('name');
// sessionStorage.clear();


window.onstorage=(e)=>{
    alert("The storage got changed.");
    console.log(e);
}