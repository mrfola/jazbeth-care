import styles from "./TopBar.module.sass";

const TopBar = () => 
{
    let whatsappIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901969/jazbeth/icons/whatsapp-white-icon_t7kig5.svg";
    let locationIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901964/jazbeth/icons/location-white-icon_nbqqby.svg";
    let instagramIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901963/jazbeth/icons/instagram-icon_qmpxs7.svg";
    let facebookIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901958/jazbeth/icons/facebook-icon_rcvk3b.svg";
    let emailIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901958/jazbeth/icons/email-white-icon_qkaath.svg";
    let twitterIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901969/jazbeth/icons/twitter-icon_tgxknu.svg";

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