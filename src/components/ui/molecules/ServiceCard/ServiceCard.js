import styles from "./ServiceCard.module.sass";
import { Link } from "react-router-dom";

const ServiceCard = ({icon, iconMarginBottom = "0px", description, url, title, cta = null}) => 
{
    return ( 
        <div className={styles.serviceCard}>
            <img src={icon} alt="" style={{marginBottom: iconMarginBottom}}/>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <Link to={url}><button>{cta ? cta : "Learn More"}</button></Link> 
        </div>
     );
}
 
export default ServiceCard;