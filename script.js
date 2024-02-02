var t1=gsap.timeline()
t1.from(".nav .part1,.nav .part3",{
    y:-20,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5,
})
t1.to(".nav .part1 #btn1,.nav .part3 #btn2,.nav .part3 #btn3",{
    backgroundColor:"tomato",
    color:"black",
    duration:0.2
})
t1.from("h1,.nav .part2",{
    x:-20,
    duration:2,
    opacity:0,

})
t1.to("h1",{
    color:"orange"
})


t1.from("img",{
    opacity:0,
    rotate:360,
    duration:1,
    stagger:0.5
})