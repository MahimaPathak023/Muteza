function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  getDirection : true
});
locoScroll.on("scroll", ScrollTrigger.update);

locoScroll.on("scroll", function (dets) {
  if (dets.direction === "up") {
      document.querySelector("#uppernav").style.top = "0%";
     
      
  }
  else if (dets.direction == "down") {
      document.querySelector("#uppernav").style.top = "-100%";
  }
})

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
show();


function showReel(){
  const circle = document.querySelector("#circle");
document.querySelector("#page1").addEventListener("mousemove", (e) =>{
   let  x = e.pageX;
   let y = e.pageY;

   circle.style.top = y + "px";
   circle.style.left = x + "px";
   circle.style.scale = "1.2";
   circle.style.borderColor = "#FFA372";
   circle.style.textColor = "#FFA372"
})
document.querySelector("#page1").addEventListener("mouseleave", function (e) {
  document.querySelector("#circle").style.top = `4%`;
  document.querySelector("#circle").style.left = `45%`;
  circle.style.scale = "1";
  circle.style.borderColor = "initial";
})
}
showReel();

var tl2 = gsap.timeline();

tl2.from("#textdiv h1",{
  opacity:0,
  y:50,
  duration:0.5,
  stagger:0.1,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#textdiv h1",
    scrub: 0.3,
  }
})


var tl3 = gsap.timeline();

tl2.from("#textdiv p",{
  opacity:0,
  y:50,
  duration:0.5,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#textdiv p",
    scrub: 0.3,
  }
})


