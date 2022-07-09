import UniversalTemplate from "../UniversalTemplate/UniversalTemplate";
import HomeHero from "../../ui/organisms/HomeHero/HomeHero";
import styles from "./HomeTemplate.module.sass";
import WhatWeDo from "../../ui/organisms/WhatWeDo/WhatWeDo";
import HowWeWork from "../../ui/organisms/HowWeWork/HowWeWork";
import ServiceOffering from "../../ui/organisms/ServiceOffering/ServiceOffering";
import Testimonials from "../../ui/organisms/Testimonials/Testimonials";
import TestimonialsNew from "../../ui/organisms/TestimonialsNew/TestimonialsNew";

const HomeTemplate = () => 
{
    return (
        <>
            <HomeHero/>
            <WhatWeDo/>
            <HowWeWork/>
            <ServiceOffering/>
            <TestimonialsNew/>
            {/* <Testimonials/> */}
        </>
       
     );
}
 
export default HomeTemplate;