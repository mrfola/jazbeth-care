import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const WhatWeBelieve = () => 
{

    let whatWeBelieveImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901971/jazbeth/images/about/what-we-believe_s9imt8.png";

    let whatWeBelieveBullets = 
    [
        "We are thrilled to have a fantastic team of bright, creative, and hardworking individuals on our team.",
        "Our workers  pass through stringent application and screening process in order to get the job done exceptionally well",
        "We collaborate with you to ensure that your vision is realized, the specifics of your home are understood, and your cleaners are set up for success."
    ];

    return ( 
        <UniversalOrganism>
        <h3>About Us</h3>
        <h2>What We Believe In</h2>

        <ImageText
            mainText="Our goal is to keep the environment clean. We believe that true riches is health rather than gold and silver coins. We are determined to go above and above in order to preserve our globe as clean as possible."
            image={whatWeBelieveImage}
            bullets={whatWeBelieveBullets}
        />
    </UniversalOrganism>
     );
}
 
export default WhatWeBelieve;