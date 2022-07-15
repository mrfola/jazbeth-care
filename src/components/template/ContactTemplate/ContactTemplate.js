import cornerImg from "./../../../assets/images/contact-hero-corner-image.png";
import middleImg from "./../../../assets/images/contact-hero-middle-image.png";
import GetInTouch from "../../ui/organisms/Contact/GetInTouch/GetInTouch";
import AtYourService from "../../ui/organisms/Contact/AtYourService";
import Hero from "../../ui/organisms/Hero/Hero";
import { waitForElementToBeRemoved } from "@testing-library/react";


const ContactTemplate = () => 
{
    
    return ( 
        <>
            <Hero
                heading="Reach out to us today"
                description="Let us transform your home into the sparkling masterpiece you want. Contact us today."
                cornerImg={cornerImg}
                middleImg={middleImg}
            />
            <GetInTouch/>
            <AtYourService/>
        </>
     );
}
 
export default ContactTemplate;