const title = document.querySelector("div.hello:first-child h1");
console.log(title)
title.innerText = "Hello"
title.style.color = "blue";
function handleTitleClick(){
    title.style.color = "pink";
    title.innerText = "You clicked"

}

function handleMouseEnter(){
    title.style.color = "black";
    title.innerText = "You hovered"
}

function handleMouseLeave(){
    title.style.color = "White";
    title.innerText = "You left"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
    title.innerText = "You resized"
}

function handleRightMouseEnter(){
    document.body.style.backgroundColor = "blue"
    title.innerText = "You right clicked"
}

title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)
window.addEventListener("contextmenu", handleRightMouseEnter)
window.addEventListener("resize", handleWindowResize)