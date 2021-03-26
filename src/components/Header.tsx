import { useState } from 'react';
import styles from '../styles/Header.module.css';
export function Header(){
    const [time, setTime] = useState("");
    // eslint-disable-next-line
    const createClock = setInterval(
        function changeHour() {
            let now = new Date();
            let time = now.getHours().toString() +" : "+ now.getMinutes().toString(); 
            setTime(time);
      }, 1000);

    return(
    <div className={styles.div1}>
        <div className={styles.div11}>Alerta</div>
        <div className={styles.div12}>Friends</div>
        <div className={styles.div13}>
            <img src="https://github.com/kirito2911.png" alt="jean brito" />
            <p>Jean Brito</p>
            </div>
        <div className={styles.div14}>Tropy</div>
        <div className={styles.div15}>{time}</div>
    </div>
    );
}