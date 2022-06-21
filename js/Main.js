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
        gsap.to(main, {yPercent: 0})
    })
}