let tl = gsap.timeline()


tl.to(".click", {
    delay: 0,
    zIndex: 4
})
tl.from(".click", {
    delay: 0,
    duration: 0.3,
    opacity: 0,
    width: -40,
})
tl.from(".click h5", {
    x: 100,
    duration: 0.3,
    opacity: 0,
    stagger: 0.2
});
tl.from(".click svg", {
    duration: 0.1,
    opacity: 0,
    scale: 5
});


tl.pause();

let contentSVG = document.querySelector(".icon")
let close = document.querySelector(".click svg")

contentSVG.addEventListener('click', function () {
    tl.play();
});
close.addEventListener('click', function () {
    tl.reverse();
});