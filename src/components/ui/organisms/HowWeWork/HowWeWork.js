import HowWeWorkCard from "../../molecules/HowWeWorkCard/HowWeWorkCard";
import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import styles from "./HowWeWork.module.sass";

const HowWeWork = () => 
{
    let scheduleADateIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901966/jazbeth/icons/schedule-a-date-icon_kzpofm.svg";
    let letUsDeliverIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901962/jazbeth/icons/let-us-deliver_tick3u.svg";
    let contactUsIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901958/jazbeth/icons/contact-us-icon_ylpczx.svg";
    let hireUsIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901962/jazbeth/icons/hire-us-icon_fqdnke.svg";

    return ( 
        <UniversalOrganism secondClass={styles.howWeWork}>
            <h3>How We Work</h3>
            <h2>All you need to do is ...</h2>
            <div className={styles.content}>
                <HowWeWorkCard
                    icon={contactUsIcon}
                    title="Contact Us"
                    description="We are just a message or call away from you"
                />
                 <HowWeWorkCard
                    icon={scheduleADateIcon}
                    title="Schedule A Date"
                    description="Fix a convenient date for the job to be done"
                />
                 <HowWeWorkCard
                    icon={hireUsIcon}
                    title="Hire Us"
                    description="At an agreed and reasonable price, we are at your service"
                />
                 <HowWeWorkCard
                    icon={letUsDeliverIcon}
                    title="Let Us Deliver"
                    description="Our professionals will deliver cleanliness to your home"
                />
            </div>
        </UniversalOrganism>
     );
}
 
export default HowWeWork;