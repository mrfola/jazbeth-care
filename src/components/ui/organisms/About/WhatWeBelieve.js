import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import whatWeBelieveImage from "./../../../../assets/images/about/what-we-believe.png";
import ImageText from "../ImageText/ImageText";

const WhatWeBelieve = () => 
{
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
            mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra diam tellus id velit nunc,
             turpis dui commodo. A mattis sit in nisl. Vivamus felis egestas dui sit morbi a risus volutpat.
              Ut adipiscing neque, nibh maecenas vitae. Id."
            image={whatWeBelieveImage}
            bullets={whatWeBelieveBullets}
        />
    </UniversalOrganism>
     );
}
 
export default WhatWeBelieve;