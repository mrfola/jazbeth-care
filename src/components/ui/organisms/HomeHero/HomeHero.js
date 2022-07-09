import styles from "./HomeHero.module.sass";
import cornerImg from "./../../../../assets/images/home-hero-corner-image.png";
import middleImg from "./../../../../assets/images/home-hero-middle-image.png";

const HomeHero = () => 
{
    return ( 
        <div className={styles.homeHero}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <h1>We Bring Spotless To Your Front Door</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae morbi fermentum nulla massa lobortis massa, 
                        feugiat in pellentesque. Sit vestibulum ornare duis orci pellentesque amet, non. 
                    </p>
                </div>
            </div>
            
            <div className={styles.middleImg}>
                <div className={styles.firstTriangle}></div>
                <img src={middleImg} alt="" />
                <div className={styles.lastTriangle}></div>
            </div>
            <div className={styles.cornerImg}>
                <img src={cornerImg} alt="" />
            </div>
        </div>
     );
}
 
export default HomeHero;