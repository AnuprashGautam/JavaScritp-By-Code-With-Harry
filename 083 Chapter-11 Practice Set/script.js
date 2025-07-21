class ComplexNumber{
    constructor(real,imaginary){
        this.real=real;
        this.imaginary=imaginary;
    }

    static addNumbers(c1, c2){
        return `${c1.real+c2.real} + i(${c1.imaginary+c2.imaginary})`;
    }

    get getReal()
    {
        return this.real;
    }
    get getImaginary()
    {
        return this.imaginary;
    }
    set setReal(real)
    {
        this.real=real;
    }
    set setImaginary(imaginary)
    {
        this.imaginary=this.imaginary;
    }
}

let c1=new ComplexNumber(1,1);
let c2=new ComplexNumber(2,-5);

console.log(ComplexNumber.addNumbers(c1,c2));


// *************************************************************************************************************** 

class Human{
    work(){
        console.log('I do nothing productive. I just make fun of everyone.');
    }
}

class Student extends Human{
    work(){
        console.log('I am very hardworking guy and i daily study for 25 hours.')
    }
}

let hmn=new Human();
let std=new Student();
hmn.work();
std.work();

console.log(std instanceof Human)

// ******************************************************************************************************************

console.log(c1.getReal);
console.log(c1.getImaginary);