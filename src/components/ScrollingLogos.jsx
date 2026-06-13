import React, { useEffect, useRef } from "react";

const ScrollingLogos = ({ logos }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const checkCenters = () => {
      if (!containerRef.current || !trackRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      // Find all image elements within the track
      const images = trackRef.current.querySelectorAll("img");
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const distance = Math.abs(imgCenter - containerCenter);

        // Highlight window size
        // If the logo is close to the center, make it colorful and fully opaque
        const maxDist = 150; // Distance threshold to trigger color
        if (distance < maxDist) {
          // Linear interpolation for smooth fade-in/fade-out
          const factor = 1 - distance / maxDist; // 0 to 1
          const grayscale = Math.round((1 - factor) * 100);
          const opacity = 0.4 + factor * 0.6; // 0.4 to 1.0
          const scale = 1 + factor * 0.1; // subtle scale up to 1.1x
          
          img.style.filter = `grayscale(${grayscale}%)`;
          img.style.opacity = `${opacity}`;
          img.style.transform = `scale(${scale})`;
        } else {
          img.style.filter = "grayscale(100%)";
          img.style.opacity = "0.4";
          img.style.transform = "scale(1)";
        }
      });

      animationFrameId = requestAnimationFrame(checkCenters);
    };

    animationFrameId = requestAnimationFrame(checkCenters);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate logos list to ensure continuous infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden relative marquee-track py-6"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-16 w-max animate-scroll"
        style={{
          animationDuration: "25s",
        }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center min-w-[120px] md:min-w-[150px] h-16 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300 pointer-events-none"
              style={{
                filter: "grayscale(100%)",
                opacity: 0.4,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
