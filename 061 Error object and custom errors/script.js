class VoteEligiblityError extends Error{
    constructor(message){
        super(message);
        this.name="VoteEligiblityError";
    }
}

try{
    let age=Number.parseInt(prompt('Enter your age:'));
    if(age<18){
        throw new VoteEligiblityError("Sorry, you are not eligible for the voting.");
    }else{
        console.log('You can cast the vote.');
    }
}catch(error)
{
    alert(error.name);
    alert(error.message);
    alert(error.stack);
}