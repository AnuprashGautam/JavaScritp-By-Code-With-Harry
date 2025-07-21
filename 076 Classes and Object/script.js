class RailwayForm{
    submit(name,trainNo){
        this.name=name;
        this.trainNo=trainNo;
        alert(`${name}, your form has been submitted for train no : ${this.trainNo}`);
    }

    detail()
    {
        alert(`Your reservation is confirmed for train no: ${this.trainNo}`);
    }
}

let Rahul=new RailwayForm();
Rahul.submit('Rahul',34567);
Rahul.detail();

let Rani=new RailwayForm();
Rani.submit('Rani',11111);
Rani.detail();
