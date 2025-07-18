// My own asynch method

// Set your api key here...
let apiKey='<API KEY>';

async function myMethod(){
    let promise1=new Promise((resolve,reject)=>{
        let condition=true;

        setTimeout(()=>{
            if(condition){
                resolve("METHOD1 GOT RESOLVED.");
            }else{
                reject("METHOD1 GOT REJECTED.");
            }
        },3000);
    });

    return promise1;
}

// Weather API

async function weatherReport(city)
{
    const api1=`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=${apiKey}`;

    try{
        let response1= await fetch(api1);   // Waits for the HTTP request to complete

        if(!response1.ok){
            throw new Error(`We are getting improper status from api-1: ${response1.status}`)
        }

        let data1=await response1.json();   // Waits for JSON parsing to complete

        let lat=data1[0].lat;
        let lon=data1[0].lon;

        const api2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        let response2= await fetch(api2);   // Waits for the HTTP request to complete

        if(!response2.ok){
            throw new Error(`We are getting improper status from api-2: ${response.status}`);
        }

        let data = await response2.json();  // Waits for JSON parsing to complete
        return data;
    }catch(error){
        throw new Error("Failed to fetch weather data: " + error.message);
    }
}

// Main async method

async function main(){
    console.log("Fetching the data from my own method:------------------------");
    let a=await myMethod();
    console.log(a);


    console.log("Now, we are waiting for the data to come from weather api-----------------------");
    let b=await weatherReport('mumbai');
    console.log(b.main.temp-273.15);
}

main();