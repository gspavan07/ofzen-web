import ReactGA from "react-ga4";

/**
 * Initialize Google Analytics 4
 * @param {string} measurementId - The GA4 Measurement ID (G-XXXXXXXXXX)
 */
export const initGA = (measurementId) => {
  if (measurementId) {
    ReactGA.initialize(measurementId);
    console.log("GA4 Initialized");
  }
};

/**
 * Track a page view
 * @param {string} path - The page path
 */
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

/**
 * Track a custom event
 * @param {string} category - The event category (e.g., 'Careers')
 * @param {string} action - The event action (e.g., 'Click Apply')
 * @param {string} label - The event label (optional)
 */
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
