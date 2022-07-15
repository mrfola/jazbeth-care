import CTA from "../../ui/organisms/CTA/CTA";
import Hero from "../../ui/organisms/Hero/Hero";
import styles from "./ServicesTemplate.module.sass";
import Laundry from "../../ui/organisms/Services/Laundry";
import Fumigation from "../../ui/organisms/Services/Fumigation";
import UpholsteryCleaning from "../../ui/organisms/Services/UpholsteryCleaning";
import ResidentialAndCommercialCleaning from "../../ui/organisms/Services/ResidentialAndCommercialCleaning";

const ServicesTemplate = () => 
{
    let middleImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901960/jazbeth/images/services-hero-middle-image_zidhm7.png";
    let cornerImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901959/jazbeth/images/services-hero-corner-image_uslzgp.png";

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