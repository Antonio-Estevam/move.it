import styles from '../styles/components/Profile.module.css';

export function Porfile (){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Antonio-estevam.png" alt="Antonio Esteva"/>
            <div>
                <strong>Antonio Estevam</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}