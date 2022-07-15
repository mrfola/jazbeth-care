import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const AtYourService = () => 
{
    let atYourServiceImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901972/jazbeth/images/contact/at-your-service_vkgyhp.png";

    let atYourServiceBullets = 
    [
        "Jazbeth Care Limited is all about efficiency, which includes our commitment to offering exceptional customer service.",
        "We understand urgency and we ensure we get back to you on time no matter the circumstance",
        "Do not hesitate to reach out to us on any issue. We would love to hear from you."
    ];

    return ( 
        <UniversalOrganism>
            <h3>Contact Us</h3>
            <h2>At Your Service</h2>

            <ImageText
                mainText="Send us a quick message or call on 07048643436 for your cleaning booking and we would be ready to serve you better.  You can also send us a dm or contact us via WhatsApp . "
                bullets={atYourServiceBullets}
                image={atYourServiceImage}
            />
        </UniversalOrganism>
     );
}
 
export default AtYourService;