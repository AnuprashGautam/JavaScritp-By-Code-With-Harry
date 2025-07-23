let alarmTime=null;

const currentTime=document.getElementById('current-time');
const alarmInput=document.getElementById('alarm-time');
const alarmSong=document.getElementById('alarm-song');
const setAlarm=document.getElementById('set-alarm');
const clearAlarm=document.getElementById('clear-alarm');

let settingTime=()=>{
    let now=new Date();
    let nowTime=now.toLocaleTimeString('en-GB');
    console.log(nowTime);

    currentTime.innerText=nowTime;

    if(alarmTime && alarmTime=== nowTime)
    {
        alert('Alarm start ringing.');
        alarmSong.play();
        alarmTime=null;
    }
}

setInterval(settingTime,1000);


// Set alarm
setAlarm.addEventListener("click", () => {
  const inputTime = alarmInput.value;
  if (!inputTime) {
    alert("Please select a time first!");
    return;
  }

  alarmTime = inputTime + ":00"; // append seconds
  alert(`Alarm set for ${alarmTime}`);
});


//Clear alarm

clearAlarm.addEventListener('click', () =>{
    alarmTime=null;
    alarmInput.value='';
    alarmSong.pause();
    alarmSong.currentTime=0;
    alert('The alarm has been reset.');
})
