try{
    console.log('I am the try block and i contains the risky code.');
    throw new ReferenceError("This is the reference error.");
}catch(Error){
    console.log('I am the catch block and i handle the error.');
}finally{
    console.log('I always run whether there is any error or not. I am used for the clean up activities.');
}