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
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <CompetitiveAdvantage
                    icon={swiftResponseIcon}
                    title="Swift Response"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <CompetitiveAdvantage
                    icon={professionalStaffIcon}
                    title="Professional Staff"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </div>
          
        </UniversalOrganism>
     );
}
 
export default ServiceOffering;