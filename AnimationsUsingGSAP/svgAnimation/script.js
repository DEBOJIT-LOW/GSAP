let initial = `M 10 80 Q 250 80 490 80`
let final = initial
let string = document.querySelector(".string")

// string.addEventListener("click",function(){
//     console.log('Click✅')
// })
// string.addEventListener("mouseenter", function () {
//     console.log('entered✅')
// })
// string.addEventListener("mouseleave", function () {
//     console.log('leaved✅')
// })
// string.addEventListener("mousemove", function () {
//     console.log('moved✅')
// })
// string.addEventListener("mousemove", function (dets) {
//     console.log(dets.x)
// })


// ------------------------------------------WHAT I LEARNT-----------------------------------------------------
// string.addEventListener("mousemove", function (dets) {
//     initial = `M 10 80 Q ${dets.x} ${dets.y} 490 80`

//     gsap.to("svg path", {
//         attr: { d: initial },
//         duration: 0.2,
//         ease: "power3.out"
//     })
// })
// string.addEventListener("mouseleave", function () {

//     gsap.to("svg path", {
//         attr: { d: final },
//         duration: 1,
//         ease: "elastic.out(1,0.2)"
//     })
// })


// ------------------------------------------WHAT I MADE-----------------------------------------------------
string.addEventListener("mousemove", function (e) {

    const rect = string.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    initial = `M 10 80 Q ${relativeX} ${relativeY} 490 80`;

    gsap.to("svg path", {
        attr: { d: initial },
        duration: 0.2,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave", function () {

    gsap.to("svg path", {
        attr: { d: final },
        duration: 1,
        ease: "elastic.out(1,0.2)"
    })
})
