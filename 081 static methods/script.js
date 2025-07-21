class NameFormatter{
    constructor(name){
        this.name=NameFormatter.captitalize(name);
    }

    static captitalize(name){
        return name.charAt(0).toUpperCase() + name.substring(1,name.length).toLowerCase();
    }
}

let a=new NameFormatter('aNUPRASH');
let b=new NameFormatter('AnUpRaSh');

console.log(a.name);
console.log(b.name);

console.log(NameFormatter.captitalize('anuprash'));