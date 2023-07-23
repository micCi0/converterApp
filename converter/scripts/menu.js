const ul = document.querySelector("nav ul");
document.getElementById("menu").onclick = function(){
    (ul.classList.contains("open")) ? ul.classList.remove("open") : ul.classList.add("open")
}
onscroll = function(){
    ul.classList.remove("open")
}
