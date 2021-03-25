import styles from '../styles/Home.module.css';
import likee from "../assets/images/like.png";
import {useState} from 'react';
export function Home(){
    const [like, setLike] = useState(0);
    function moreLike(){
        setLike(like+1);
    }
    return(
    <div className={styles.div1}>
       <div className={styles.div2}>
            <div className={styles.div20}>
                <button className={styles.like} onClick={moreLike}><img src={likee} alt="like" className={styles.imglike}/></button>
            </div>
            <div className={styles.div21}>
                <div className={styles.header}>
                    <div className={styles.headericon}></div>
                    <div className={styles.headertit}><p className={styles.titu}>Comentário de <b>Jean Brito</b> no <b>Portifólio</b>.</p></div>
                </div>
                <p className={styles.textin}>KKKKKKKKKKKKKKKKKKKKKKKKKK</p>
                <div className={styles.showlike}><b className={styles.numberlike}>{like}</b><img className={styles.likecounter} src={likee} alt="like"/></div>
            </div>
            <div className={styles.div22}>
                <p className={styles.tit}>Redes Sociais</p>
                <div className={styles.icon1}><p className={styles.iconleg}>Jean Brito</p></div>
                <div className={styles.icon2}><p className={styles.iconleg}>Kirito2911</p></div>
                <div className={styles.icon3}><p className={styles.iconleg}><a href="mailto:jean_carlo291@hotmail.com">jean_carlo291@hotmail.com</a></p></div>
                <div className={styles.icon4}><p className={styles.iconleg}><a href="https://www.linkedin.com/in/jean-brito-930419195/">Jean Brito</a></p></div>
            </div>
       </div>
    </div>
    );
}