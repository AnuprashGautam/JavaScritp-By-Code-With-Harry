class College{
    constructor(name,address,experience)
    {
        this.name=name;
        this.address=address;
        this.experience=experience;
    }

    collegeDetails(){
        console.log(`Your college name is ${this.name}. It is located in ${this.address}. And, it is ${this.experience} years old.`);
    }
}

class Student extends College{
    constructor(name,address,experience,stdName,rollNo){
        super(name,address,experience);
        this.name=name;
        this.rollNo=rollNo;
    }

    studentDetails(){
        super.collegeDetails();
        console.log(`My name is ${this.name} and my roll number is ${this.rollNo}.`);
    }

    changeCollge(name){
        super.name=name;
        console.log('Your college name got changed successfully.');
    }

    changeCollgeAddress(address){
        super.address=address;
        console.log('Your college address got changed successfully.');
    }
}

let std=new Student('MIET','Meerut',14,'Anuprash',22);
std.studentDetails();
std.changeCollge('MIT');
std.changeCollgeAddress('Lucknow');