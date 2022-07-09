import fumigationServices from "./../../../../assets/icons/fumigation-services.svg";
import laundryServices from "./../../../../assets/icons/laundry-services.svg";
import upholsteryCleaning from "./../../../../assets/icons/upholstery-cleaning.svg";
import residentialCleaning from "./../../../../assets/icons/residential-cleaning.svg";
import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ServiceCard from "../../molecules/ServiceCard/ServiceCard";
import styles from "./WhatWeDo.module.sass";
import { Link } from "react-router-dom";

const WhatWeDo = () => 
{
    return ( 
        <UniversalOrganism secondClass={styles.whatWeDo}>
            <h3>What We Do</h3>
            <h2>We offer services such as...</h2>

            <div className={styles.services}>
                <div className={styles.content}>
                <ServiceCard
                    icon={residentialCleaning}
                    iconMarginBottom="32.85px"
                    title="Residential Cleaning"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    url = "/services"
                />
                <ServiceCard
                    icon={upholsteryCleaning}
                    iconMarginBottom="28.02px"
                    title="Upholstery Cleaning"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    url = "/services"
                />
                <ServiceCard
                    icon={laundryServices}
                    iconMarginBottom="29.03px"
                    title="Residential Cleaning"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    url = "/services"
                />
                <ServiceCard
                    icon={fumigationServices}
                    iconMarginBottom="29.03px"
                    title="Residential Cleaning"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    url = "/services"
                />
                </div>
                <div className={styles.link}>   
                    <Link to="/services">See All Services</Link>
                </div>
            </div>
            
        </UniversalOrganism>
     );
}
 
export default WhatWeDo;