import {createContext, useState, ReactNode} from 'react';
import challenges from '../../challenges.json';

interface challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChellengeContexData{
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: challenge;
    levelUP: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChellengeProvider {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChellengeContexData);

export function ChellengeProvider({ children }: ChellengeProvider){
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience ]= useState(20);
    const [challengesCompleted, setChallengesCompleted ]= useState(8);
    
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUP(){
        setLevel(level + 1);
      }

    function startNewChallenge(){
        const randomChallengIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengIndex];


        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }
    
    
    return(
        <ChallengesContext.Provider 
        value={{
            level,
            currentExperience,
            experienceToNextLevel,
            challengesCompleted,
            levelUP,
            startNewChallenge,
            activeChallenge,
            resetChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}

