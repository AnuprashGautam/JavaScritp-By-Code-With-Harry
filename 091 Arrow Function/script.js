let obj={
    name:'Anuprash',
    city:'Meerut',
    detail:function(){
        console.log(this.name,'-----',this.city);
        // let that=this;

        setTimeout(()=>{
            console.log(this.name,'-----',this.city);
        },2000);
    },

    greet:()=>console.log('Hello I am a student.')
}

obj.detail();
obj.greet();