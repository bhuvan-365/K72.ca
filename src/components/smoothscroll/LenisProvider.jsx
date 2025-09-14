"use client"; // keep this if you’re in Next.js App Router; harmless in CRA

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),
            smooth: true,
            orientation: "vertical",
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // drive Lenis with requestAnimationFrame
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // update a CSS var so other components can read scroll progress
        function onScroll() {
            const limit =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress =
                limit > 0
                    ? Math.max(0, Math.min(1, lenis.scroll / limit))
                    : 0;
            document.documentElement.style.setProperty(
                "--scroll-progress",
                progress
            );
        }

        lenis.on("scroll", onScroll);
        onScroll(); // initial call

        return () => {
            lenis.destroy();
            document.documentElement.style.removeProperty("--scroll-progress");
        };
    }, []);

    return <>{children}</>;
}
