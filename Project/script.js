let tl = gsap.timeline();

tl.from(".nav-gsap",{
    y: -200,
    duration: 2,
    ease: "power4.inOut",
    stagger : 0.5
})
tl.from("img",{
    x: 50,
    duration : 2.2,
    opacity : 0,
    stagger : 0.6,
    rotate : 60,
})
tl.from(".main-heading",{
    x: -500,
    duration: 1,
    opacity : 0,
    stagger : 0.4
})