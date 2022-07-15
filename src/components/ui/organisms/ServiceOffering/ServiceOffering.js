import CompetitiveAdvantage from "../../molecules/CompetitiveAdvantage/CompetitiveAdvantage";
import reasonablePricingIcon from "./../../../../assets/icons/reasonable-pricing-icon.svg";
import professionalStaffIcon from "./../../../../assets/icons/professional-staff-icon.svg";
import swiftResponseIcon from "./../../../../assets/icons/swift-response-icon.svg";
import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import styles from "./ServiceOffering.module.sass";

const ServiceOffering = () => 
{
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