
function EnterAnimation() {
    let Element = document.querySelector("#start-anim-text")

    //Add text to node
    //Element.appendChild(document.createTextNode("Hej"))
    Element.style.display = "block";

    
}

document.addEventListener("load", EnterAnimation(), false)