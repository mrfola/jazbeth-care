import { Link } from "react-router-dom";
import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import styles from "./CTA.module.sass";

const CTA = () =>
{
    return ( 
        <UniversalOrganism secondClass={styles.CTA}>
            <div className={styles.content}>
                <p className={styles.title}>How can Jazbeth Care help you?</p>
                <p className={styles.description}>Tell us your problem and let us solve it for you immediately!</p>
            </div>
            <Link to="/contact" className={styles.button}>Contact Us Now</Link>
            {/* <div></div> */}
        </UniversalOrganism>
     );
}
 
export default CTA;