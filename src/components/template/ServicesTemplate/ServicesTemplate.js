import middleImg from "./../../../assets/images/services-hero-middle-image.png";
import cornerImg from "./../../../assets/images/services-hero-corner-image.png";
import styles from "./ServicesTemplate.module.sass";
import Hero from "../../ui/organisms/Hero/Hero";
import ResidentialAndCommercialCleaning from "../../ui/organisms/Services/ResidentialAndCommercialCleaning";
import UpholsteryCleaning from "../../ui/organisms/Services/UpholsteryCleaning";
import CTA from "../../ui/organisms/CTA/CTA";
import Laundry from "../../ui/organisms/Services/Laundry";
import Fumigation from "../../ui/organisms/Services/Fumigation";

const ServicesTemplate = () => 
{
    return ( 
        <div className={styles.servicesTemplate}>
            <Hero
                heading="Our Services Bespeaks Quality!"
                description="Every client needs a clean environment. One call, our healthy and trustworthy squad will be at your doorstep to deliver quality to you."
                cornerImg={cornerImg}
                middleImg={middleImg}
            />
            <ResidentialAndCommercialCleaning/>
            <UpholsteryCleaning/>
            <CTA/>
            <Laundry/>
            <Fumigation/>
        </div>
     );
}
 
export default ServicesTemplate;