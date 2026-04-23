import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage — A zero-lag image component for Ofzen.
 *
 * Features:
 * - IntersectionObserver: only loads when image enters viewport
 * - Shimmer skeleton shown while loading
 * - Smooth fade-in when image is ready (no flash or pop-in)
 * - decoding="async" so image decode never blocks the main thread
 * - Supports eager loading for above-the-fold critical images
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',       // 'lazy' | 'eager'
  decoding = 'async',
  objectFit = 'cover',
  style = {},
  onLoad,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // IntersectionObserver: trigger src only when near viewport
  useEffect(() => {
    if (loading === 'eager') return; // Already in view for eager images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Start loading 200px before it enters view
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ isolation: 'isolate' }}
    >
      {/* Shimmer Skeleton — shown while image is loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(200,210,230,0.25) 25%, rgba(220,228,245,0.4) 50%, rgba(200,210,230,0.25) 75%)',
            backgroundSize: '400% 100%',
            animation: 'shimmer 1.6s ease-in-out infinite',
          }}
        />
      )}

      {/* Actual Image — only src set once in view */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={handleLoad}
          className={className}
          style={{
            objectFit,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.45s ease',
            willChange: 'opacity',
            ...style,
          }}
          {...rest}
        />
      )}

      {/* Shimmer keyframe — injected once via a style tag */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default LazyImage;
