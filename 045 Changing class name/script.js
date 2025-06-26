let a= document.getElementsByClassName("container")[0]

a.className="cyan-red"

a.classList.add("beautify")
a.classList.remove("beautify")

a.classList.add("cyan-red")

console.log(a.classList.contains("dark-theme"))

a.classList.toggle("dark-theme")

console.log(a.classList.contains("dark-theme"))

