import React, { useEffect, useState } from "react";

export default function TopProgressBar({ height = "3px" }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function tick() {
            const val = parseFloat(
                getComputedStyle(document.documentElement)
                    .getPropertyValue("--scroll-progress") || 0
            );
            setProgress(Number.isFinite(val) ? val : 0);
            requestAnimationFrame(tick);
        }
        const id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
            <div className="w-full bg-transparent" style={{ height }}>
                <div
                    className="h-full origin-left transition-[width] duration-100 ease-linear"
                    style={{
                        width: `${progress * 100}%`,
                        background:
                            "linear-gradient(90deg, #7c3aed, #06b6d4)", // purple→cyan
                        height,
                    }}
                />
            </div>
        </div>
    );
}
