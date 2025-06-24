// 1, 2, 3, 4

let eligibility=()=>{
    let age=Number.parseInt(prompt("Enter your age:")) 

    if(age<18)
    {
        console.error("Your are underage.")
    }else{
        // alert("You can drive.")
        if(age>4)
        {
            location.href = "https://www.google.com"
        }
    }
}

eligibility()

let choice=prompt("Do you want to recheck (y/n)?:")
if(choice=="y")
{
    eligibility()
}else{
    alert("Thanks for using the program.")
}

// 5

let bg
while(bg!="exit"){
    bg=prompt("Enter the color:")
    if(bg=="exit")
    {
        break
    }
    document.body.style.background=bg
}

