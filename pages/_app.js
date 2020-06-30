import React from 'react';
import '../public/scss/global.scss';
import Font from '../components/Font';
import ReactGA from 'react-ga';

const { GA_TRACKING_ID } = process.env;

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    Font();
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />
}
