import styles from "./HowWeWorkCard.module.sass";

const HowWeWorkCard = ({icon, title, description}) => 
{
    return ( 
        <div className={styles.howWeWork}>
            <div className={styles.imgContainer}>
                <img src={icon} alt="" />
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
     );
}
 
export default HowWeWorkCard;