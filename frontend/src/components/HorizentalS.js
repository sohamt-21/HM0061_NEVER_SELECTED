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
            <div className="left1">
              <p className="left1-top">
                Step 2
              </p>
              <p className="left1-bottom">
                Hover Clubs for <a href="#clubs" style={{ color: "aliceblue" }}>information</a>
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
                Join our social <a href="https://org-connect-amber.vercel.app" style={{ color: "aliceblue" }}>App</a>
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 6
              </p>
              <p className="left1-bottom">
                Community Guide
              </p>
              <p style={{color:'whitesmoke'}}>Here there are two types <br /> of Communities, Private and Public. <br />Users should join public communities for announcement.<br /> Club memnbers are in private communities</p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 7
              </p>
              <p className="left1-bottom">
                Interview and Discussion
              </p>

              <p style={{color:'whitesmoke'}}>
                We have an integrated meet platform for club memnbers to take seamless discussion meets. <br />Also for volunteer interviews also the platoform can be used.
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="left1">
              <p className="left1-top">
                Step 8
              </p>
              <p className="left1-bottom">
                Posts
              </p>
              <p style={{color:'whitesmoke'}}>
                ALl posts are first detected for any violence <br />If any illegal thing is found, such post are blocked. <br /> Admin and users has access to block and report other users.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HorizentalS;