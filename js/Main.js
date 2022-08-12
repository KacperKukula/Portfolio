const nav = document.querySelector("nav"),
        main = document.querySelector("main"),
        NavLinker = document.querySelectorAll(".nav-linker")
        AJAX = document.querySelector("article")
let IsMainEject = false

gsap.set(main, {yPercent: 100})

// NavLinker.forEach(element => {
//     this.addEventListener("click", function(e) {
//         gsap.to(main, {yPercent: 0})
//         i++
//         console.log(i)
//     })
// });


//SPA
for(let i = 0; i < 4; i++) {
    NavLinker[i].addEventListener("click", function(e) {

        //Eject main content
        gsap.to(main, 1.5, {yPercent: 0, ease: "power4.out"})
        gsap.to(nav, 1.5, {yPercent: 0})    

        ///Spa
        switch(i) {
            case 0:
                makeRequest('content/aboutme.html', AJAX);
                break;
            case 1:
                makeRequest('content/performance.html', AJAX);
                break;
            case 2:
                makeRequest('content/projects.html', AJAX);
                break;
            case 3:
                makeRequest('content/contact.html', AJAX);
                break;
        }
    })
}
