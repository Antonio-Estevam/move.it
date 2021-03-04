import '../styles/global.css';

import { ChellengeProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  
  

  return (
    <ChellengeProvider>   
        <CountdownProvider>

          <Component {...pageProps} />

        </CountdownProvider> 
    </ChellengeProvider>  
    )
}

export default MyApp
