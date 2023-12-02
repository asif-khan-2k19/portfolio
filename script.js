var crsrOutline = document.querySelector('#cursor-outline');
var crsr = document.querySelector('#cursor');

document.addEventListener('mousemove', (dets) => {
    crsrOutline.animate({
        left: dets.x - 80 + "px",
        top: dets.y - 80 + "px",
    }, { duration: 1000, fill: "forwards" }
    );
})

gsap.from("#circle-1, #circle-2",{
    opacity : 0,
    // delay:.9,
    duration : 1,
    y : 100
});

gsap.from("#about h1",{
    opacity : 0,
    duration : .8,
    y : 100
});

gsap.from("#about #text", {
    delay: .2,
    opacity: 0,
    duration: 1,
    y: 50
});

gsap.from("#education h1, .college", {
    opacity: 0,
    duration: 1,
    y: 40,
    stagger: .2,
    scrollTrigger: {
        trigger: "#education h1",
        scroller: "#right-sidebar",
        start: "top 80%"
    }
});

gsap.from("#nav a",{
    x: -20,
    opacity: 0,
    delay: .3,
    stagger: .1,
    duration: .7,
})

gsap.from("#skills h1",{
    opacity: 0,
    duration: 1,
    y: 40,
    stagger: .2,
    scrollTrigger: {
        trigger: "#skills h1",
        scroller: "#right-sidebar",
        start: "top 80%"
    }
});

gsap.from("#skills #language h4",{
    opacity: 0,
    duration: .8,
    y: 40,
    stagger: .1,
    scrollTrigger: {
        trigger: "#skills #language h4",
        scroller: "#right-sidebar",
        start: "top 80%"
    }
})

gsap.from("#skills #tools h4",{
    opacity: 0,
    duration: .8,
    y: 40,
    stagger: .1,
    scrollTrigger: {
        trigger: "#skills #tools h4",
        scroller: "#right-sidebar",
        start: "top 80%"
    }
})

gsap.from("#contact h1",{
    opacity: 0,
    duration: 1,
    y: 40,
    stagger: .2,
    scrollTrigger: {
        trigger: "#contact h1",
        scroller: "#right-sidebar",
        start: "top 80%"
    }
});

gsap.from(".input, textarea",{
    opacity: 0,
    duration: 1,
    y: 40,
    stagger: .1,
    scrollTrigger: {
        trigger: ".input, textarea",
        scroller: "#right-sidebar",
        start: "top 80%"
    }
});

Shery.textAnimate("#asif",{
    style: 1,
    y: 10,
    delay: 0.1,
    duration: .5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
})
Shery.imageEffect(".dp", {
    style: 2,
    config: {"resolutionXY":{"value":1000},"distortion":{"value":true},"mode":{"value":-10},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":0.81,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":-21.62,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":0.27,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.54,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":80,"range":[-100,100]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.5,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
});