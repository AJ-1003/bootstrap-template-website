// React
import React, { useEffect } from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />
};
