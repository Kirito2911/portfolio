import styles from '../styles/Blocks.module.css';
import Background from '../assets/images/Untitled.png';
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
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 1</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 2</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 3</p> 
            </button>
            </div >
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 4</p> 
            </button>
            </div>
            <div className={styles.divop}>
            <button className={styles.option} style={{backgroundImage: `url(${Background})`}}>
                <p>The Last of Us Parte 5</p> 
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