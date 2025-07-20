class Task{
    constructor(title,description,date,time)
    {
        this.title=title;
        this.description=description;
        this.date=date;
        this.time=time;
    }
}

function taskAdder(t) {
    const task=document.createElement('div');
    task.innerHTML=
        `<div class="task">
                <div>
                    <h3>Title: <span style="color:black;">${t.title}</span></h3>
                </div>
                <div style="display: flex; justify-content: end; align-items: center;">
                    <h4>Date: <span style="color:black;">${t.date}</span></h4>
                    <h4>Time: <span style="color:black;">${t.time}</span></h4>
                </div>
            </div>`;

    document.getElementById('right').appendChild(task);
}

document.getElementsByTagName('form')[0].addEventListener('submit',async (event)=>{
    event.preventDefault();

    const taskTitle=document.getElementById('taskTitle').value;
    const description=document.getElementById('description').value;
    const date=document.getElementById('date').value;
    const time=document.getElementById('time').value;

    const t=new Task(taskTitle,description,date,time);

    taskAdder(t);

    console.log(taskTitle)
    console.log(time)
    console.log(date)
    console.log(description)
})