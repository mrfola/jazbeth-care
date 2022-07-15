import Hero from "../../ui/organisms/Hero/Hero";
import WhatWeDo from "../../ui/organisms/WhatWeDo/WhatWeDo";
import HowWeWork from "../../ui/organisms/HowWeWork/HowWeWork";
import ServiceOffering from "../../ui/organisms/ServiceOffering/ServiceOffering";
import TestimonialsNew from "../../ui/organisms/TestimonialsNew/TestimonialsNew";

// import Testimonials from "../../ui/organisms/Testimonials/Testimonials";

const HomeTemplate = () => 
{

let cornerImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901973/jazbeth/images/home-hero-corner-image_jmugmc.png";
let middleImg = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901961/jazbeth/images/home-hero-middle-image_lei4oa.png";

    
    return (
        <>
            <Hero
                heading="We Bring Spotless To Your Front Door"
                description="Excellence is our habit as we turn every spot in your homes or offices to be spotless. All you need is sit back and relax while we work our magic!"
                cornerImg={cornerImg}
                middleImg={middleImg}
            />
            <WhatWeDo/>
            <HowWeWork/>
            <ServiceOffering/>
            <TestimonialsNew/>
            {/* <Testimonials/> */}
        </>
       
     );
}
 
export default HomeTemplate;