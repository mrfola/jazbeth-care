import styles from "./CompetitiveAdvantage.module.sass";

const CompetitiveAdvantage = ({icon, title, description}) => 
{
    return ( 
        <div className={styles.competitiveAdvantageContainer}>
            <div className={styles.competitiveAdvantage}>
                <img src={icon} alt="" />
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
     );
}
 
export default CompetitiveAdvantage;