var tl=gsap.timeline();
tl
.from("#inc",{
    width:0,
    ease:Circ.easeInOut,
    duration:2
})
.to("#loader",{
    height:0,
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5
})
.from("#nav h3,#nav img",{
    y:20,
    ease:Expo.easeInOut,
    opacity:0,
    stagger:.15,
    duration:2
},"-=1")
.from("#txt h3,#txt h1,#txt h5",{
    y:-50,
    opacity:0,
    stagger:.5,
    duration:2,
    ease:Expo.easeInOut
},"-=2")
.from("#ig img",{
    x:300,
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut

},"-=3")
.to(".igt",{
    y:100,
    opacity:1,
    stagger:.25,
    duration:.5,
    ease:Expo.easeInOut
},"-=2.5")
.from("#btm img",{
    y:200,
    opacity:0,
    stagger:.5,
    duration:.7,
    ease:Expo.easeInOut
},"-=1.5")

var f=0;
document.querySelectorAll("#btm img").forEach(function(elem){
    elem.addEventListener("mouseover",function(){
        elem.style.height="85%";
        elem.style.transform="rotate(10deg)";
        elem.style.transition="all cubic-bezier(0.19, 1, 0.22, 1) 1s";
    })
 elem.addEventListener("mouseleave",function(){
        elem.style.height="80%";
        elem.style.transform="rotate(0deg)";
        elem.style.transition="all cubic-bezier(0.19, 1, 0.22, 1) 1s";
    })
})