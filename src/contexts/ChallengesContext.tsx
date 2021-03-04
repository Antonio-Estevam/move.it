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
    completeChallenge: () => void;
}

interface ChellengeProvider {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChellengeContexData);

export function ChellengeProvider({ children }: ChellengeProvider){
    const [level,setLevel] = useState(0);
    const [currentExperience, setCurrentExperience ]= useState(0);
    const [challengesCompleted, setChallengesCompleted ]= useState(0);
    
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

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUP();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

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
            resetChallenge,
            completeChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}

