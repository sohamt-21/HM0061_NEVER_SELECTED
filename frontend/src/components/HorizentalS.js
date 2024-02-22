import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../css/Scroll.css'



function HorizentalS() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">

          <div className="scroll-section" style={{ display: "flex", flexDirection: 'column' }}>
            <div className="left1">
              <p className="left1-top">
                Step 1
              </p>
              <p className="left1-bottom">
                Create your account <a href="#navbar" style={{ color: "aliceblue" }}>here</a>
              </p>
            </div>
            <div className="right1">

            </div>
          </div>

          <div className="scroll-section">
            <div className="left2">
              <p className="left2-top">
                Step 1
              </p>
              <p className="left2-bottom">
                Create your account <a href="#navbar" style={{ color: "aliceblue" }}>here</a>
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left2">
              <p className="left2-top">
                Step 2
              </p>
              <p className="left2-bottom">
                Hover Clubs for <a href="#clubs">information</a>
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 4
              </p>
              <p className="left1-bottom">
                Get to know your skill favourable club
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 5
              </p>
              <p className="left1-bottom">
                Join our social app
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 6
              </p>
              <p className="left1-bottom">
                Community Guide:
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 7
              </p>
              <p className="left1-bottom">
                Interviews
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 8
              </p>
              <p className="left1-bottom">
                Posts guide
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HorizentalS;