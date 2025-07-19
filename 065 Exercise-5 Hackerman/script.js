let adder=async (str)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let e=document.createElement('p');
            e.textContent=str;
            document.getElementById('content').appendChild(e);
            resolve();
        },2000);
    });
};

(async ()=>{
    let name=prompt(`Enter your friend's name:`);

    await adder(`Hacking ${name}'s phone...`);
    await adder(`Phone hacked successfully...`);
    await adder(`Initiating the DDOS attack...`);
    await adder(`HACK COMPLETE!!!`);
})();