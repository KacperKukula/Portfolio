const nav = document.querySelector("nav"),
        main = document.querySelector("main"),
        NavLinker = document.querySelectorAll(".nav-linker")

gsap.set(main, {yPercent: 100})

let i = 0;

// NavLinker.forEach(element => {
//     this.addEventListener("click", function(e) {
//         gsap.to(main, {yPercent: 0})
//         i++
//         console.log(i)
//     })
// });

for(let i = 0; i < 4; i++) {
    NavLinker[i].addEventListener("click", function(e) {
        gsap.to(main, 1.5, {yPercent: 0, ease: "power4.out"})
        gsap.to(nav, 1.5, {yPercent: 0})

        ///Spa
        makeRequest('content/AboutMe.html', main)
    })
}