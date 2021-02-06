import { useState } from 'react';
function WD({ Component, pageProps }) {
  const [isLogged, logout] = useState(true)
  console.log({...pageProps})
  return <Component {...pageProps} />
}

export default WD
