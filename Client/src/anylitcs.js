import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-LHCY3B4PPT"); 
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
