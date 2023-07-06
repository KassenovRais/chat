import gsap from "gsap"

export const createAnimation = (className: string) => {

       gsap.fromTo(className,{
         x:-250,
         y:'-3vh',
         scale:1.3,
       } , {
         x:640,
         y: '-4vh',
         scale: 0.4,
         ease:"ease",
         duration:2,
         scrollTrigger:{
           trigger:className,
           scrub:true,
           
         }
       })
     
   }