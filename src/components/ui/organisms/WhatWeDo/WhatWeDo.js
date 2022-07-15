import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ServiceCard from "../../molecules/ServiceCard/ServiceCard";
import styles from "./WhatWeDo.module.sass";
import { Link } from "react-router-dom";

const WhatWeDo = () => 
{
    let fumigationServices = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901962/jazbeth/icons/fumigation-services_ap4ibt.svg";
    let laundryServices = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901963/jazbeth/icons/laundry-services_bucfcj.svg";
    let upholsteryCleaning = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901969/jazbeth/icons/upholstery-cleaning_ruxx44.svg";
    let residentialCleaning = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901966/jazbeth/icons/residential-cleaning_binioc.svg";
    
    // We dream of having a clean home but who dreams of cleaning it? Jazbeth care will transform your home into a spotless one. 
    // We dream of having a clean home but who dreams of cleaning it? Let Jazbeth care transform your home into a spotless one. 
    // We dream of having a clean home but who dreams of cleaning it? No need to sacrifice your precious time, cleaning and scrubbing your home. 

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
                    description="We dream of having a clean home but who dreams of cleaning it? Let Jazbeth care transform your home into a spotless one. "
                    url = "/services"
                />
                <ServiceCard
                    icon={upholsteryCleaning}
                    iconMarginBottom="28.02px"
                    title="Upholstery Cleaning"
                    description="Our team of upholstery cleaning experts will help revamp your furniture - eliminating odor, dust and stain from your upholstery."
                    url = "/services"
                />
                <ServiceCard
                    icon={laundryServices}
                    iconMarginBottom="29.03px"
                    title="Laundry Services"
                    description="Coming home to a pile of clean, fresh, clothing is the dream of everyone. Leave it to us to make your week a laundry-free one."
                    url = "/services"
                />
                <ServiceCard
                    icon={fumigationServices}
                    iconMarginBottom="29.03px"
                    title="Fumigation Services"
                    description="A pest infestation is bad news for every home owner. Rid your home of pests today with our fast and effective fumigation services. "
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