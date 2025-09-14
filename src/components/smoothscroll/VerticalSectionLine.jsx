import React, { useEffect, useState } from "react";

/**
 * A vertical center line with circular markers for each scroll section.
 * Add `class="ss-section"` and optional `data-label="Name"` to every section.
 */
export default function VerticalSectionLine({ selector = ".ss-section" }) {
    const [markers, setMarkers] = useState([]);
    const [progress, setProgress] = useState(0);

    // Build marker positions
    useEffect(() => {
        function buildMarkers() {
            const nodes = Array.from(document.querySelectorAll(selector));
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setMarkers(
                nodes.map((el) => {
                    const rect = el.getBoundingClientRect();
                    const center = window.scrollY + rect.top + rect.height / 2;
                    return {
                        id: el.id || "",
                        topRatio: docH > 0 ? center / (docH + window.innerHeight) : 0,
                        label: el.dataset.label || el.id || "",
                    };
                })
            );
        }

        buildMarkers();
        window.addEventListener("resize", buildMarkers);
        window.addEventListener("load", buildMarkers);
        const obs = new MutationObserver(buildMarkers);
        obs.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("resize", buildMarkers);
            window.removeEventListener("load", buildMarkers);
            obs.disconnect();
        };
    }, [selector]);

    // Read scroll progress
    useEffect(() => {
        let rafId;
        function tick() {
            const val = parseFloat(
                getComputedStyle(document.documentElement)
                    .getPropertyValue("--scroll-progress") || 0
            );
            setProgress(Number.isFinite(val) ? val : 0);
            rafId = requestAnimationFrame(tick);
        }
        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, []);

    const active = markers.reduce(
        (best, m, i) =>
            Math.abs(m.topRatio - progress) <
                Math.abs(markers[best]?.topRatio - progress)
                ? i
                : best,
        0
    );

    return (
        <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            <div className="relative h-[80vh] w-px bg-gray-200/60 rounded">
                {markers.map((m, i) => (
                    <div
                        key={i}
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ top: `${m.topRatio * 100}%` }}
                    >
                        <div
                            className={`w-3 h-3 rounded-full border transition-transform duration-300 ${i === active
                                ? "scale-125 border-transparent"
                                : "scale-100 border-gray-300"
                                }`}
                            style={{
                                background:
                                    i === active
                                        ? "linear-gradient(180deg,#7c3aed,#06b6d4)"
                                        : "#fff",
                            }}
                        />
                        <div className="mt-2 text-xs text-gray-500 text-center opacity-90 select-none">
                            {m.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
