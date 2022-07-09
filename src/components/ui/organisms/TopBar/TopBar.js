import whatsappIcon from "./../../../../assets/icons/whatsapp-white-icon.svg";
import locationIcon from "./../../../../assets/icons/location-white-icon.svg";
import instagramIcon from "./../../../../assets/icons/instagram-icon.svg";
import facebookIcon from "./../../../../assets/icons/facebook-icon.svg";
import emailIcon from "./../../../../assets/icons/email-white-icon.svg";
import twitterIcon from "./../../../../assets/icons/twitter-icon.svg";
import styles from "./TopBar.module.sass";

const TopBar = () => 
{
    return ( 
        <div className={styles.topBar}>
            <div className={styles.contactIcons}>
                <div className={styles.contactIcon}>
                    <img id={styles.whatsappIcon} src={ whatsappIcon } alt="Whatsapp Icon" />
                    <span>07048643436</span>
                </div>
                <div className={styles.contactIcon}>
                    <img id={styles.emailIcon} src={ emailIcon } alt="Email Icon" />
                    <span>Jazbethcare2021@gmail.com</span>
                </div>
                <div className={styles.contactIcon}>
                    <img id={styles.locationIcon} src={ locationIcon } alt="Location Icon" />
                    <span>Lagos, Nigeria</span>
                </div>
            </div>
            <div className={styles.socialMediaIcons}>
                <div className={styles.socialMediaIcon}>
                    <img src={facebookIcon} alt="" />
                </div>
                <div className={styles.socialMediaIcon}>
                    <img src={twitterIcon} alt="" />
                </div>
                <div className={styles.socialMediaIcon}>
                    <img src={instagramIcon} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default TopBar;