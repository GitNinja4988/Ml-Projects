function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Locomotive Scroll setup
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main1"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main1", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main1").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Cursor Movement Animation
    const page1 = document.querySelector("#page1");
    const cursor = document.querySelector("#cursor");

    page1.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    });

    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.3
        });
    });

    page1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            duration: 0.3
        });
    });

    // Page 2 Animation
    gsap.from("#page2-content p", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main1",
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });

    gsap.from("#para p", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main1",
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });

    // Page 3 Animation
    gsap.from("#page3-top h4, #page3-top h2", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main1",
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });

    gsap.from(".box", {
        y: 150,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3-elements",
            scroller: "#main1",
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });

    // Page 4 Animation
    gsap.from("#page4 #philosophy", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main1",
            start: "top 90%",
            end: "top 70%",
            scrub: 1
        }
    });

    gsap.from("#page4 #clients-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main1",
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });

    gsap.from("#page4 .ride", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main1",
            start: "top 80%",
            end: "top 60%",
            scrub: 1
        }
    });

// Footer Animation (Bottom Section)
gsap.from(".bottom-section .footer-hr", {
    y: -300, // Slide down from above
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".footer-content", // Trigger the footer
        scroller: "#main1", // LocomotiveScroll's container
        start: "top 80%", // Animation starts when the footer is in view
        end: "top 60%",
        scrub: 1,
        toggleActions: "play reverse play reverse", // Re-trigger when scrolling back
        markers: false // Enable markers for debugging
    }
});

gsap.from(".bottom-section .footer-description", {
    y: -300, // Slide down from above
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".footer-content", // Trigger the footer
        scroller: "#main1", // LocomotiveScroll's container
        start: "top 80%", // Animation starts when the footer is in view
        end: "top 60%",
        scrub: 1,
        toggleActions: "play reverse play reverse", // Re-trigger when scrolling back
        markers: false // Enable markers for debugging
    }
});

gsap.from(".bottom-section .footer-tagline", {
    y: -300, // Slide down from above
    opacity: 0,
    duration: 1.4,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".footer-content", // Trigger the footer
        scroller: "#main1", // LocomotiveScroll's container
        start: "top 15%", // Animation starts when the footer is in view
        end: "top 70%",
        scrub: 1,
        toggleActions: "play reverse play reverse", // Re-trigger when scrolling back
        markers: false // Enable markers for debugging
    }
});

}

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-button');
    const downloadCountElement = document.getElementById('download-count');
    const progressBar = document.getElementById('progress-bar');
    const progressCircle = document.getElementById('progress-circle');

    let downloadCount = 0;

    downloadButton.addEventListener('click', () => {
        downloadCount++;
        updateDownloadCount();
    });

    function updateDownloadCount() {
        downloadCountElement.textContent = `Downloads: ${downloadCount}`;
        const progressPercentage = (downloadCount / 100) * 100; // Assume max 100 downloads for the progress bar
        const circumference = 2 * Math.PI * 45; // Circumference of the circle
        const offset = circumference - (progressPercentage / 100 * circumference);
        progressBar.style.strokeDashoffset = offset;
    }
});

locoscroll();
