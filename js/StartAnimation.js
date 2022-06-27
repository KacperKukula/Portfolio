
function EnterAnimation() {
    const Element = document.querySelectorAll(".start-anim-text"),
        Bckg = document.querySelector("#start-anim"),
        TakeOut = document.querySelector(".start-anim-TakeOut"), 
        SpaceInform = document.querySelector(".start-anim-SpaceInform"),
        nav = document.querySelector("nav")
    let SpaceFlag = true

    //Prefix to navigation (going up)
    gsap.set(nav, {yPercent: -100})

    //Animation -> Press space
    window.addEventListener("keydown", function (event) {
        if((event.key == " ")&&(SpaceFlag))  {
            tl.pause()
            gsap.to(Bckg, 0.2, {opacity: 0})
            gsap.set(Bckg, {display: "none"})
            gsap.set(TakeOut, {display: "none"})
            gsap.set(SpaceInform, {display: "none"})
            gsap.set(nav, {yPercent: 30})
            SpaceFlag = false;
        }
    })

    //Animation with text
    gsap.set(Element, {opacity: 0, x: -20})
    tl = gsap.timeline()
    tl.to(Element[0], 0.7, {delay: 1, x: 0, opacity: 1})
        .to(Element[1], 0.7, {delay: 1, x: 0, opacity: 1})
        .to(Element[2], 0.7, {delay: 1, x: 0, opacity: 1})
        .to(TakeOut, 0.7, {delay: 1, xPercent: -100})
        //.to([Bckg, SpaceInform], 0.1, {opacity: 0})
        .set([Bckg, SpaceInform], {display: "none"})
        .to(TakeOut, 0.7, {delay: 0, xPercent: -200})
        .to(nav, 2, {yPercent: 30, ease: "power3.out"}, "-=1")
        .set(SpaceFlag, {value: false})
}

document.addEventListener("load", EnterAnimation(), false)
