import styles from "./ImageText.module.sass";
import {v4 as uuidv4} from "uuid";

const ImageText = ({icon=null, mainText, bullets=null, image, flipImage=null}) => 
{

    let checkIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901958/jazbeth/icons/check-icon_dsxod6.svg";

    let style={}
    if(flipImage)
    {
        style = { flexDirection : "row-reverse"}
    }
    return ( 
        <div className={styles.imgAndText} style={style}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.text}>
                    <div className={styles.plainText}>
                        {icon && 
                        <div className={styles.icon}>
                            <img src={icon} alt="" />
                        </div>}
                        <div className={styles.content}>{mainText}</div>
                    </div>
                    {bullets && 
                    <div className={styles.bullets}>
                        {bullets.map((bullet) => 
                        (
                            <div key={uuidv4()}className={styles.bullet}>
                                <img src={checkIcon} alt="" className={styles.icon} />
                                <p className={styles.content}>{bullet}</p>
                            </div>
                        ))}
                    </div>}
                    
                </div>
            </div>
     );
}
 
export default ImageText;