import styles from '../styles/Blocks.module.css';
import Background from '../assets/images/Untitled.png';
import Background2 from '../assets/images/kk.jpg';

export function Blocks(){
    
    return(
        <div className={styles.list}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte II</p> 
            </button>
            <button className={styles.option} style={{backgroundImage: `url(${Background2})`}}>
                <p>Final Fantasy 7 Remake</p> 
            </button>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte II</p> 
            </button>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte II</p> 
            </button>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte II</p> 
            </button>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte II</p> 
            </button>   
        </div>
    
    );
}