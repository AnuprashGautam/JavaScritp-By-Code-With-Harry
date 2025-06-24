let bg
while(bg!="exit"){
    bg=prompt("Enter the color:")
    if(bg=="exit")
    {
        break
    }
    document.body.style.background=bg
}