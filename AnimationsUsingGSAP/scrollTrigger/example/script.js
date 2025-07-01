gsap.from(".page1 .box", {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    rotate: 360,
    delay: 0.5
})
gsap.from(".page2 .box", {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    rotate: 720,
    // scrollTrigger: ".page2 .box"
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        markers: "true",
        scrub: 3
    }
})
gsap.from(".page3 .box", {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    rotate: 360,

})