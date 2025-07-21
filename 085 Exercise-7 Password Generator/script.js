class PasswordGenerator{
    constructor(level){
        this.level=level;
    }

    generatePassword(len){
        let ch='abcdefghijklmnopqrstuvwxyz';
        let num='0123456789';
        let sym='!@#$%^&*()_+=-';
        let i=0;

        let pass='';

        if(len<3){
            console.log('Please provide atleast 3 length.');
        }else{
            while(i<len)
            {
                if(this.level=='strong'){
                    pass+=ch.charAt(Math.floor(Math.random()*100)%ch.length);
                    pass+=num.charAt(Math.floor(Math.random()*100)%num.length);
                    pass+=sym.charAt(Math.floor(Math.random()*100)%sym.length);
                    i+=3;
                }else if(this.level=='normal'){
                    pass+=ch.charAt(Math.floor(Math.random()*100)%ch.length);
                    pass+=num.charAt(Math.floor(Math.random()*100)%num.length);
                    i+=2;
                }else{
                    pass+=ch.charAt(Math.floor(Math.random()*100)%ch.length);
                    i+=1;
                }
            }

            console.log(`The generated password for length ${len} is : ${pass.slice(0,len)}`);
        }
    }
}

let pass1=new PasswordGenerator('strong');
let pass2=new PasswordGenerator('normal');
let pass3=new PasswordGenerator('weak');

pass1.generatePassword(10);
pass2.generatePassword(10);
pass3.generatePassword(10);