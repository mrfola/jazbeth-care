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
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae morbi fermentum nulla massa lobortis massa, 
                feugiat in pellentesque. Sit vestibulum ornare duis orci pellentesque amet, non."
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