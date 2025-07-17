function updateTime(){
    const now=new Date();
    const h=String(now.getHours()).padStart(2,'0');
    const m=String(now.getMinutes()).padStart(2,'0');
    const s=String(now.getSeconds()).padStart(2,'0');
    
    document.getElementById('time').innerText=`${h}:${m}:${s}`;
}

function updateDate(){
    const now=new Date();
    const day=String(now.getDate()).padStart(2,'0');
    const month=String(now.getMonth()).padStart(2,'0');
    const year=String(now.getFullYear());

    document.getElementById('date').innerText=`${day}/${month}/${year}`;
}

updateTime();
updateDate();

setInterval(updateTime,1000);
setInterval(updateDate,1000);


