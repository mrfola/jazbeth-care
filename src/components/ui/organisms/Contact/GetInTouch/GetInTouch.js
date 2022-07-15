import UniversalOrganism from "../../UniversalOrganism/UniversalOrganism";
import styles from "./GetInTouch.module.sass";

const GetInTouch = () => 
{
    let getInTouchImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901971/jazbeth/images/contact/get-in-touch_motor2.png";
    let workingHoursIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901970/jazbeth/icons/working-hours-icon_wm0ss3.svg";
    let locationIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901962/jazbeth/icons/location-icon_suhdwk.svg";
    let emailIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901960/jazbeth/icons/email-icon_zxobky.svg";
    let callIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901961/jazbeth/icons/call-icon_kmcpsc.svg";

    return ( 
        <UniversalOrganism secondClass={styles.getInTouch}>
            <h3>Contact Us</h3>
            <h2>Get in Touch Today</h2>
            <div className={styles.content}>
               <div className={styles.image}>
                    <img src={getInTouchImage} alt="" />
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <img src={locationIcon} alt="" />
                        </div>
                        <div className={styles.text}>
                        Lagos Branch: 44a Salaudeen Akano, Ogudu gra. <br/>Ibadan Branch:  9 Jibowu Crescent, Iyaganku GRA, Ibadan
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <img src={callIcon} alt="" />
                        </div>
                        <div className={styles.text}>
                        Send us a message or Call: <br />07048643436
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <img src={emailIcon} alt="" />
                        </div>
                        <div className={styles.text}>
                        Send an email: <br />Jazbethcare2021@gmail.com
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <img src={workingHoursIcon} alt="" />
                        </div>
                        <div className={styles.text}>
                            Office Hours: <br /> Monday - Friday: 8:30am - 7:00pm <br /> Saturday: 8:00am - 3:00pm
                        </div>
                    </div>
                </div> 
            </div>
        </UniversalOrganism>
     );
}
 
export default GetInTouch;