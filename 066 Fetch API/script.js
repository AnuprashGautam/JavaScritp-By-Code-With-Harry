let fetchResponse=fetch('https://api.thecatapi.com/v1/images/search');

fetchResponse
    .then((value1)=>{
        console.log(value1, typeof value1);
        console.log(value1.status);
        console.log(value1.ok);
        console.log(value1.headers)

        // return value1.json();
        return value1.text();
    })
    .then((value2)=>{
        console.log(value2);
    })