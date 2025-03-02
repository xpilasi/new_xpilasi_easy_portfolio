import '@/styles/globals.css'
import '@splidejs/react-splide/css';
import '@/styles/splide-custom.css';
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  return (
  <>
    {/* Código de seguimiento de HubSpot */}
    <Script
          id="hs-script-loader" // Mantiene el ID original de HubSpot
          strategy="afterInteractive"
          src="//js.hs-scripts.com/49442398.js"
          async
          defer
        />
        
    <Component {...pageProps} />
  </>
  );
}
