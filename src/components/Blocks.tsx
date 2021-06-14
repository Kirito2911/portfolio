import styles from '../styles/Blocks.module.css';
import Background from '../assets/images/Untitled.png';
import Move from '../assets/images/moveit.png';
import Gow from '../assets/images/gow.png';
import Re from '../assets/images/re.png';
import Final from '../assets/images/final.png';
import Celol from '../assets/images/celol.png';
import Kirifli from '../assets/images/kiriflix.png';
import Poke from '../assets/images/pokedex.png';
import Pod from '../assets/images/podcastr.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Blocks(){
    let audio = new Audio('/change.mp3');
    const start = () => {
        audio.play()
      }
    const settings = {
        className: "slider",
        speed: 500,
        dots:false,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 8,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
            
            <Slider {...settings}>
            <a href="https://moveitt-kirito2911.vercel.app/">
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Move})`}} onClick={start}>
                <p>Move It</p> 
            </button>
            </div>
            </a>
            <a href="https://kirito2911.github.io/celol/">
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Celol})`}}>
                <p>Celol</p> 
            </button>
            </div>
            </a>
            <a href="https://kiriflix.vercel.app/">
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Kirifli})`}}>
                <p>Kiriflix</p> 
            </button>
            </div >
            </a>
            <a href="https://kirito2911.github.io/pokedex/">
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Poke})`}}>
                <p>Pokédex</p> 
            </button>
            </div>
            </a>
            <a href="https://podcastr-flame.vercel.app/">
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Pod})`}}>
                <p>Podcastr</p> 
            </button>
            </div>
            </a>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte II</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Final})`}}>
                <p>Final Fantasy 7 Remake</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Gow})`}}>
                <p>God of War</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Re})`}}>
                <p>Resident Evil Village</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 10</p> 
            </button>
            </div>
            
            </Slider>
        
    
    );
}