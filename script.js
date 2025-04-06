var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")



document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})

var h4all=document.querySelectorAll("#nav h4")
// console.log(h4all)
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11Eed"
        crsr.style.backgroundColor="#95C11Eed"
    })
    console.log(elem)
})



gsap.to("#nav", {
    backgroundColor: "#000",
    
    duration: 0.5,
    height: "110px",
     scrollTrigger: {
         trigger: "#nav",
         scroller: "body",
         markers: true,
         start:"top -10%",
         end: "top -11%",
         scrub: 1
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -35%",
        end:"top -70%",
        scrub:2,

    }
})

gsap.from("#about-us-in,#about-us",{
    y:50,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3

    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    stagger:0.3,
    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3

    }
})
gsap.from("#collon1",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#collon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1,
        duration:1
    }
})

gsap.from("#collon2",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#collon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1,
        duration:1
    }
})
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });