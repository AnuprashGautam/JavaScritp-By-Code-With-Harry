let postRequest =async () => {
  let option = 
    {
        method: 'POST',
        body: JSON.stringify({
            title: 'anuprash',
            body: 'student',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    let response= await fetch("https://jsonplaceholder.typicode.com/posts", option)
    let json=await response.json();
    console.log(json);

    return json;
};



let getRequest=async (id)=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let json=await response.json();
    console.log(json);
}


(async ()=>{
    await postRequest();
    await getRequest(1);
})();

