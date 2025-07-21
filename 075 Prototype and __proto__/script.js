let person={
    greet:()=>console.log('Hello')
}

let student={
    study:()=>console.log('I am studying.')
}

student.__proto__=person;

student.greet();
student.study();

console.log('***********************************');

function Animal(name){
    this.name=name;
}

Animal.prototype.speak=function(){console.log(`The ${this.name} makes sound.`)};

let dog=new Animal("dog");
dog.speak();

console.log(dog.__proto__===Animal.prototype);
console.log(dog.__proto__.__proto__===Object.prototype);

console.log('***********************************');

let GrandParent={
    oldGold:function(){console.log('We have old gold.')}
}

let Parent={
    newGold:function(){console.log('We have new gold.')}
}

let Children={
    nothing:function(){console.log('We have nothing.')}
}

Children.__proto__=Parent.prototype;
Parent.__proto__=GrandParent.prototype;

Children.nothing;
Children.newGold;
Children.oldGold;
