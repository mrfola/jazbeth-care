import styles from "./Hero.module.sass";


const Hero = ({heading, description, cornerImg, middleImg}) => 
{
    return ( 
        <div className={styles.hero}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <h1>{heading}</h1>
                    <p>{description}</p>
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
 
export default Hero;