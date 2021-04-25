import { useState } from 'react';
import styles from '../styles/Header.module.css';
import icon from '../assets/images/playstation.png';
export function Header(){
    const [time, setTime] = useState("");
    // eslint-disable-next-line
    const createClock = setInterval(
        function changeHour() {
            let now = new Date();
            let hour = '';
            if(now.getHours().toString().length===1){
                hour ='0'+ now.getHours().toString();
            } else{
                hour=now.getHours().toString();
            }
            let minutes = '';
            if(now.getMinutes().toString().length===1){
                minutes ='0'+ now.getMinutes().toString();
            } else{
                minutes=now.getMinutes().toString();
            }
            let time = hour +' : '+minutes; 
            setTime(time);
      }, 1000);

    return(
    <div className={styles.div0}>
    <div className={styles.div1}>
        <div className={styles.div11}><img src={icon} alt="playsation" /></div>
        <div className={styles.div12}>friends</div>
        <div className={styles.div13}>
            <img src="https://github.com/kirito2911.png" alt="jean brito" />
            <p>Jean Brito</p>
            </div>
        <div className={styles.div14}>tropys</div>
        <div className={styles.div15}>{time}</div>
    </div>
    </div>
    );
}