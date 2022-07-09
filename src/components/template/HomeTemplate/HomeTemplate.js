
import styles from "./HomeTemplate.module.sass";
import Hero from "../../ui/organisms/Hero/Hero";
import WhatWeDo from "../../ui/organisms/WhatWeDo/WhatWeDo";
import HowWeWork from "../../ui/organisms/HowWeWork/HowWeWork";
import cornerImg from "./../../../assets/images/home-hero-corner-image.png";
import middleImg from "./../../../assets/images/home-hero-middle-image.png";
import ServiceOffering from "../../ui/organisms/ServiceOffering/ServiceOffering";
import TestimonialsNew from "../../ui/organisms/TestimonialsNew/TestimonialsNew";

// import Testimonials from "../../ui/organisms/Testimonials/Testimonials";

const HomeTemplate = () => 
{
    return (
        <>
            <Hero
                heading="We Bring Spotless To Your Front Door"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae morbi fermentum nulla massa lobortis massa, 
                feugiat in pellentesque. Sit vestibulum ornare duis orci pellentesque amet, non."
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