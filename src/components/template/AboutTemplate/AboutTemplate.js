import cornerImg from "./../../../assets/images/about-hero-corner-image.png";
import middleImg from "./../../../assets/images/about-hero-middle-image.png";
import Hero from "../../ui/organisms/Hero/Hero";
import WhoIsJazbeth from "../../ui/organisms/About/WhoIsJazbeth";
import MeetTheFounder from "../../ui/organisms/About/MeetTheFounder";
import CTA from "../../ui/organisms/CTA/CTA";
import MeetTheTeam from "../../ui/organisms/About/MeetTheTeam";
import WhatWeBelieve from "../../ui/organisms/About/WhatWeBelieve";

const AboutTemplate = () => 
{
    return ( 
        <>
            <Hero
                heading="Our reputation is spotless"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae morbi fermentum nulla massa lobortis massa, 
                feugiat in pellentesque. Sit vestibulum ornare duis orci pellentesque amet, non."
                cornerImg={cornerImg}
                middleImg={middleImg}
            />
            <WhoIsJazbeth/>
            <MeetTheFounder/>
            <CTA/>
            <MeetTheTeam/>
            <WhatWeBelieve/>
        </>
        
     );
}
 
export default AboutTemplate;