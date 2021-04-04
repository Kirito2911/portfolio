import styles from '../styles/Blocks.module.css';
import Background from '../assets/images/Untitled.png';
import Move from '../assets/images/moveit.png';
import Celol from '../assets/images/celol.png';
import Kirifli from '../assets/images/kiriflix.png';
import Poke from '../assets/images/pokedex.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Blocks(){
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
            <button className={styles.option} style={{backgroundImage: `url(${Move})`}}>
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
            <a href="https://kirito2911.github.io/Pokedex/">
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Poke})`}}>
                <p>Pokédex</p> 
            </button>
            </div>
            </a>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte II</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 6</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 7</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 8</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 9</p> 
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