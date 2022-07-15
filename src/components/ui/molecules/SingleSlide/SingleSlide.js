import styles from "./SingleSlide.module.sass";

const SingleSlide = ({name, title, testimonial, img}) => 
{
    let quotationMark = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901965/jazbeth/icons/quotation-mark_oihohn.svg";

    return ( 
        <div className={styles.singleSlide}>
            <div className={styles.nameImageTitle}>
                <img className={styles.displayPicture} src={img} alt="" />
                <div className={styles.nameImage}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.title}>{title}</p>
                </div>
                <img className={styles.quotationMark} src={quotationMark} alt="" />
            </div>
            <p className={styles.testimonial}>"{testimonial}"</p>
        </div>
     );
}
 
export default SingleSlide;