gsap.to("#sec1ctr img",{
    scrollTrigger:{
        trigger:"#sec1ctr img",
        scroller:"body",
        start:"top 10%",
        end:"top -560%",
        pin:true,
        scrub:1
    },
    transform:"translate(-50%,-50%)rotate(-14deg)",
})


gsap.to("#sec1ctr img",{
    scrollTrigger:{
        trigger:"sec1ctr img",
        start:"top -420%",
        end:"top -560%",
        pin:true,
        scrub:3
    },
    transform:"translate(-50%,-50%)",
    opacity:0,
    scale:".5",
    
    
})
gsap.from("#section5 img",{
   
    y:-50,
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    scrollTrigger:{
        trigger:"#section5 img",
        start:"top 30%"
    }
    
})
document.querySelectorAll("#icon6 i").forEach(function(elem){
    elem.addEventListener("mouseover",function(){
        elem.style.color="rgb(191, 36, 36)";
        elem.style.transition=" all .5s cubic-bezier(0.19, 1, 0.22, 1)";
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.color="white";
        elem.style.transition=" all .5s cubic-bezier(0.19, 1, 0.22, 1)";
    })
})
