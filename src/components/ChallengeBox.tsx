import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { reseteCountdown } = useContext(CountdownContext);
    function handleChallengeSucceded(){
        completeChallenge();
        reseteCountdown();

        
    }

    function handleChallengeFailed(){
        resetChallenge();
        reseteCountdown();
    }

    return(
        <div className={styles.challengBoxContainer}>
            {activeChallenge ? (
                
                <div className={styles.challengActive}>
                    <header>{activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                         type="button"
                         className={styles.challengFailedButton}
                         onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button
                         type="button"
                         className={styles.challengSucceededButton}
                         onClick={handleChallengeSucceded}
                        >
                            Completei
                        </button>

                    </footer>
                </div>

            ) : (

                <div className={styles.challengBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>

            )}
        </div>
    )
}