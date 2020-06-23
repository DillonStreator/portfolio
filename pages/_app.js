import React from 'react';
import '../public/scss/global.scss';
import Font from '../components/Font';

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    Font();
  }, []);

  return <Component {...pageProps} />
}
