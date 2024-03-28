const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from(".nav-link", {
    stagger:0.1,
    y:10,
    durtions:5,
    ease:Power2,
    opacity:0,
    })
    Shery.textAnimate(".heading h1" , {
       
        style: 1,
        y: 10,
        delay: 0.1,
        duration: 2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
      });

      gsap.from(".anim2", {
      y:30,
      stagger:.2,
      opacity:0,
      ease:Power3,
      duration:1,
        })
        Shery.imageEffect("#ephe img",{
config:
    {"uFrequencyX":{"value":77.1,"range":[0,100]},"uFrequencyY":{"value":8.4,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":64},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

            // debug:true,
            style:3,
        })
        Shery.imageEffect(".imgeff img",{
           
            config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.1,"range":[-1,1]},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":1,"y":1}},"shapeEdgeSoftness":{"value":0.5,"range":[0,0.5]},"shapeRadius":{"value":2,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":64},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uFrequencyX":{"value":77.1,"range":[0,100]},"uFrequencyY":{"value":8.4,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]}},
        
            
                        // debug:true,
                        style:2,
                    })
                    gsap.from("#ephe img",{
                        y:"70",
                        opacity:0,
                       
                        duration:1,
                        ease:Expo,
                        })
                        Shery.imageEffect(".bimg", {
                            style: 4,
                            // debug:true,
                            gooey:true,
                            config:
                            {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":5.65,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.27095207253886},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":10.08,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.67,"range":[0,2],"_gsap":{"id":17}},"discard_threshold":{"value":1,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.56,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}})
                        
                        
                        document.querySelector("#ftext button").addEventListener("mouseover",function(){
                           gsap.to("#future video",{
                            opacity:1,
                            duration:1.5,
                            ease:Power4,
                           })
                        })
                        document.querySelector("#ftext button").addEventListener("mouseleave",function(){
                            gsap.to("#future video",{
                                opacity:0,
                                duration:1.5,
                                ease:Power4,
                               })
                        })