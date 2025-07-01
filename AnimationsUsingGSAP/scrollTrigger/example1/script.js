gsap.from(".page1 .box", {
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
    scale: 0,
    rotate: 720,
    scrollTrigger: {
        trigger: ".page1 .box",
        scroller: "body",
        start: "top 50%",
        end: "top top",
        markers: "true",
        scrub: 2
    }
})
gsap.from(".page2 h1", {
    duration: 0.5,
    opacity: 0,
    x: 500,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        markers: "true",
        scrub: 3
    }
})
gsap.from(".page2 h5", {
    duration: 0.5,
    opacity: 0,
    x: -500,
    scrollTrigger: {
        trigger: ".page2 h5",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        markers: "true",
        scrub: 3
    }
})
gsap.from(".page3 .box", {
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
    scale: 0,
    rotate: 720,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        end: "top 50%",
        markers: "true",
        scrub: 2
    }
})