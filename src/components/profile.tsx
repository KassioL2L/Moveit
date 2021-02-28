import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fjdo6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/127027052_2695441170771199_6406962273853294565_n.jpg?_nc_ht=instagram.fjdo6-1.fna.fbcdn.net&_nc_ohc=Oz0eO3s1ng8AX9E237r&tp=1&oh=25fd2b614145b52c739f417f3270afab&oe=6062EFE7" alt="foto-perfil"/>
            <div>
                <strong>Kássio Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="evel"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}