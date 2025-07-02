// ------------------------------------WHAT I LEARNT------------------------------------------------


/*let container = document.querySelector(".container")

let box = document.querySelector(".container .box")
let cursor = document.querySelector(".cursor")

container.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        delay: 0,
        duration: 0.1,
        x: dets.x,
        y: dets.y
    })
})


/
// box.addEventListener("mouseenter", function () {
//     cursor.innerHTML = "View More"
//     gsap.to(cursor, {
//         delay: 0,
//         scale: 4,
//         backgroundColor: "rgba(84, 84, 84, 0.229)",
//     })
// })
// box.addEventListener("mouseleave", function () {
//     cursor.innerHTML = ""
//     gsap.to(cursor, {
//         delay: 0,
//         scale: 1,
//         backgroundColor: "white"
//     })
// })
*/


// ------------------------------------WHAT I MADE------------------------------------------------



// let page2 = document.querySelector(".page2")🚫 No need to select evrytime
// let page3 = document.querySelector(".page3")🚫
let page = document.querySelectorAll(".page")//✅
let box = document.querySelector(".container .box")
let cursor = document.querySelector(".cursor")

/* page2.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        delay: 0,
        duration: 0.1,
        x: dets.x,
        y: dets.y
    })
})
page3.addEventListener("mousemove", function (dets) {
gsap.to(cursor, {
    delay: 0,
    duration: 0.1,
    x: dets.x,
    y: dets.y
})
})
*/
page.forEach((page, index) => {
    page.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            delay: 0,
            duration: 0.1,
            x: dets.x,
            y: dets.y
        })
    })
});
box.addEventListener("mouseenter", function () {

    gsap.to(cursor, {
        delay: 0,
        scale: 4,
        backgroundColor: "rgba(84, 84, 84, 0.229)",
    })
})
box.addEventListener("click", function () {

    gsap.to(cursor, {
        border: "1px solid rgba(56, 56, 56, 0.4)"
    });

    setTimeout(() => {
        gsap.to(cursor, {
            border: "none"
        });
    }, 500);
})
box.addEventListener("mouseleave", function () {

    gsap.to(cursor, {
        delay: 0,
        scale: 1,
        backgroundColor: "white"
    })
})

