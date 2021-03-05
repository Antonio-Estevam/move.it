import '../styles/global.css';

import { ChellengeProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  
  

  return (
    <ChellengeProvider>        

          <Component {...pageProps} />

    </ChellengeProvider>  
    )
}

export default MyApp
