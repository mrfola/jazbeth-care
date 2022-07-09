import styles from "./Testimonials.module.sass";
import firstImage from "./../../../../assets/images/testimonial-section-first-bg-image.png"
import secondImage from "./../../../../assets/images/testimonial-section-second-bg-image.png"
import GallerySlider from "../GallerySlider/GallerySlider";

const Testimonials = () => 
{
    return ( 
         <div className={styles.testimonials}>
            <div className={styles.images}>
                <div className={styles.firstImage}>
                    <img src={firstImage} alt="" />
                </div>
                <div className={styles.secondImage}>
                    <div className={styles.firstTriangle}></div>
                    <img src={secondImage} alt="" />
                    <div className={styles.secondTriangle}></div>
                </div>
            </div>
            <div className={styles.content}>
                <h3>Testimonial</h3>
                <h2>Our wonderful clients say...</h2>
                <div className={styles.testimonials}>
                    <GallerySlider/>
                </div>
            </div>
        </div>       
     );
}
 
export default Testimonials;