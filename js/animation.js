
function EnterAnimation() {
    const Element = document.querySelectorAll(".start-anim-box")
    const Bckg = document.querySelector("#start-anim")

    window.addEventListener("keydown", function (event) {
        if(event.key == " ")  {
            gsap.to(Bckg, 0.2, {opacity: 0})
            gsap.set(Bckg, {display: "none"})
        }
    })

    //Animation -> Press space



    //Animation with text

    gsap.set(Element[1], {y: -25})
    gsap.set(Element[0], {translateX: "135px", y: -20})

    let tl = gsap.timeline({delay: 1});
    tl.to(Element[0], 0.7, {y: 0, opacity: 1})
        .to(Element[0], 0.8, {delay: 0.3, x: 0, ease: "power2.out"})
        .to(Element[1], 0.5, {delay: 0.2, y: 0, opacity: 1})
        .set(Element[2], {opacity: 1})
        .to(Element[2], 0.5, {delay: 2, y: 55, ease: "power3.out"})
        .to(Bckg, 2, {opacity: 0})
}

document.addEventListener("load", EnterAnimation(), false)
