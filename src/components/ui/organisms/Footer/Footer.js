import logo from './../../../../assets/icons/logo-white.svg';
import styles from './Footer.module.sass';
import { Link } from 'react-router-dom';
import instagramIcon from "./../../../../assets/icons/instagram-icon.svg";
import facebookIcon from "./../../../../assets/icons/facebook-icon.svg";
import twitterIcon from "./../../../../assets/icons/twitter-icon.svg";

const Footer = () => 
{
    return ( 
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.addressAndLogo}>
                    <img src={logo} />
                    <p className={styles.address}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus quam mauris erat a sem. Hendrerit eu non facilisis commodo quam leo nibh.
                    </p>
                </div>
                <div className={styles.company}>
                    <h3>Company</h3>
                    <div className={styles.content}>
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>  
                <div className={styles.contact}>
                    <h3>Contact Us</h3>
                    <div className={styles.content}>
                        <div className={styles.address}>Lagos, Nigeria.</div>
                        <div className={styles.availableTimes}>Monday - Friday | 8:00am to 7:00pm</div>
                        <div className={styles.email}>Jazbethcare2021@gmail.com</div>
                        <div className={styles.phoneNumber}>07048643436</div>
                        <div className={styles.socials}>
                            <img src={facebookIcon}/>
                            <img src={twitterIcon}/>
                            <img src={instagramIcon}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.copyright}>All rights reserved  © Jazbeth Care Limited 2022.</div>
        </div>
     );
}
 
export default Footer;