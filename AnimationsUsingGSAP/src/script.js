let tl = gsap.timeline();

tl.from("h1",{
    y:-30,
    opacity:0,
    duration:0.8,
    delay:0.5
})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration:0.8,
    stagger:0.3
})
tl.from("#text",{
    y:30,
    duration:0.5,
    opacity:0,
    scale:0.2
})