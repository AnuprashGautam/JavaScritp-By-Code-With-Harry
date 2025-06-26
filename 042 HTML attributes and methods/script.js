let element=document.getElementsByClassName("container")[0]

console.log(element.hasAttribute("style"))
console.log(element.hasAttribute("anuprash"))

console.log(element.getAttribute("style"))

element.setAttribute("align","center")

element.removeAttribute("style")

element.setAttribute("data-username","anuprash")
element.setAttribute("data-surname","gautam")

console.log(element.attributes)

console.log(element.dataset)
console.log(element.dataset.username)
console.log(element.dataset.surname)