import Hero from "../../ui/organisms/Hero/Hero";
import WhoIsJazbeth from "../../ui/organisms/About/WhoIsJazbeth";
import MeetTheFounder from "../../ui/organisms/About/MeetTheFounder";
import CTA from "../../ui/organisms/CTA/CTA";
import MeetTheTeam from "../../ui/organisms/About/MeetTheTeam";
import WhatWeBelieve from "../../ui/organisms/About/WhatWeBelieve";

const AboutTemplate = () => 
{
    let cornerImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901972/jazbeth/images/about-hero-corner-image_i9azfr.png";
    let middleImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901973/jazbeth/images/about-hero-middle-image_dnqzby.png";

    return ( 
        <>
            <Hero
                heading="Our reputation is spotless"
                description="We have years of experience on the job, and we have a long list of testimonials to back up our claims."
                cornerImg={cornerImg}
                middleImg={middleImg}
            />
            <WhoIsJazbeth/>
            <MeetTheFounder/>
            <CTA/>
            {/* <MeetTheTeam/> */}
            <WhatWeBelieve/>
        </>
        
     );
}
 
export default AboutTemplate;