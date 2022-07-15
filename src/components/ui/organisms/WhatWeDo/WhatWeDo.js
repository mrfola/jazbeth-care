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
                    description="We dream of having a clean home but who dreams of cleaning it? Let Jazbeth help you out. Besides, a clean home is a happy home."
                    url = "/services"
                />
                <ServiceCard
                    icon={upholsteryCleaning}
                    iconMarginBottom="28.02px"
                    title="Upholstery Cleaning"
                    description="Even the clothes of your furniture matters a great deal. Our expertise workers will take of your upholstery cleaning."
                    url = "/services"
                />
                <ServiceCard
                    icon={laundryServices}
                    iconMarginBottom="29.03px"
                    title="Laundry Services"
                    description="Having an empty laundry basket is the best 5 seconds of the week. Leave it to us to make your week a clean, laundry-free one."
                    url = "/services"
                />
                <ServiceCard
                    icon={fumigationServices}
                    iconMarginBottom="29.03px"
                    title="Fumigation Services"
                    description="There is nothing worse than having to live in a pest infested apartment. Let us help you eradicate them from your home."
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