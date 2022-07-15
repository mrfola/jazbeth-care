import GetInTouch from "../../ui/organisms/Contact/GetInTouch/GetInTouch";
import AtYourService from "../../ui/organisms/Contact/AtYourService";
import Hero from "../../ui/organisms/Hero/Hero";

const ContactTemplate = () => 
{
    let cornerImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901972/jazbeth/images/contact-hero-corner-image_ywwn3l.png";
    let middleImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901973/jazbeth/images/contact-hero-middle-image_i3c4lh.png";

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