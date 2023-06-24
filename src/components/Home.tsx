import styles from '../styles/Home.module.css';
export function Home(){
    return(
    <div className={styles.div1}>
       <div className={styles.div2}>
            <div className={styles.div21}>
                <div className={styles.header}>
                    <div className={styles.headericon}></div>
                    <div className={styles.headertit}><p className={styles.titu}>Comentário de <b>Jean Brito</b> no <b>Portifólio</b>.</p></div>
                </div>
                <p className={styles.textin}>Meu nome é Jean, tenho 20 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas. No tempo livre eu gosto de assistir animes ou jogar algum jogo. Tenho um pouco de conhecimento em C, Java, Python, Javascript, React, Angular, Flask, Django, Git e algumas outras coisas. Aqui estão alguns projetos acompanhados dos meus jogos favoritos.</p>
             
            </div>
            <div className={styles.div22}>
                <p className={styles.tit}>Redes Sociais</p>
                <a href="https://www.facebook.com/profile.php?id=100006825931566"><div className={styles.icon1}><p className={styles.iconleg}>Jean Brito</p></div></a>
                <a href="https://github.com/Kirito2911"><div className={styles.icon2}><p className={styles.iconleg}>Kirito2911</p></div></a>
                <a href="mailto:jean_carlo291@hotmail.com"><div className={styles.icon3}><p className={styles.iconleg}>Jean Brito</p></div></a>
                <a href="https://www.linkedin.com/in/jean-brito-930419195/"><div className={styles.icon4}><p className={styles.iconleg}>Jean Brito</p></div></a>
            </div>
       </div>
    </div>
    );
}
