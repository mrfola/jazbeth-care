import styles from './Footer.module.sass';
import { Link } from 'react-router-dom';

const Footer = () => 
{
    let logo = 'https://res.cloudinary.com/dobmssrgt/image/upload/v1657901964/jazbeth/icons/logo-white_epl6ls.svg';
    let instagramIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901963/jazbeth/icons/instagram-icon_qmpxs7.svg";
    let facebookIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901958/jazbeth/icons/facebook-icon_rcvk3b.svg";
    let twitterIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901969/jazbeth/icons/twitter-icon_tgxknu.svg";

    return ( 
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.addressAndLogo}>
                    <img src={logo} />
                    <p className={styles.address}>
                    We not only provide services to residential, industrial, and commercial establishments, but we also manufacture cleaning materials and provide necessary cleaning accessories.                    </p>
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