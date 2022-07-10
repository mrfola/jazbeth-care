import cornerImg from "./../../../assets/images/contact-hero-corner-image.png";
import middleImg from "./../../../assets/images/contact-hero-middle-image.png";
import GetInTouch from "../../ui/organisms/Contact/GetInTouch/GetInTouch";
import AtYourService from "../../ui/organisms/Contact/AtYourService";
import Hero from "../../ui/organisms/Hero/Hero";


const ContactTemplate = () => 
{
    return ( 
        <>
            <Hero
                heading="Reach out to us today"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae morbi fermentum nulla massa lobortis massa, 
                feugiat in pellentesque. Sit vestibulum ornare duis orci pellentesque amet, non."
                cornerImg={cornerImg}
                middleImg={middleImg}
            />
            <GetInTouch/>
            <AtYourService/>
        </>
     );
}
 
export default ContactTemplate;