import CompetitiveAdvantage from "../../molecules/CompetitiveAdvantage/CompetitiveAdvantage";
import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import styles from "./ServiceOffering.module.sass";

const ServiceOffering = () => 
{
    let reasonablePricingIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901965/jazbeth/icons/reasonable-pricing-icon_qpmye4.svg";
    let professionalStaffIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901964/jazbeth/icons/professional-staff-icon_hedczm.svg";
    let swiftResponseIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901968/jazbeth/icons/swift-response-icon_mmet6d.svg";

    return ( 
        <UniversalOrganism secondClass={styles.serviceOffering}>
            <h3>Why Us</h3>
            <h2>We offer you services with...</h2>

            <div className={styles.competitiveAdvantages}>
                <CompetitiveAdvantage
                    icon={reasonablePricingIcon}
                    title="Reasonable Pricing"
                    description="Our services are reasonable and can be afforded by any social class of the nation. We are open to negotiations as well."
                />
                <CompetitiveAdvantage
                    icon={swiftResponseIcon}
                    title="Swift Response"
                    description="We take pleasure in the speed with which we respond to our valued customers. Our customer service is the best in the business."
                />
                <CompetitiveAdvantage
                    icon={professionalStaffIcon}
                    title="Professional Staff"
                    description="Our crew is highly trained and tested, and they make certain that each customer's vision for their property is accomplished."
                />
            </div>
          
        </UniversalOrganism>
     );
}
 
export default ServiceOffering;