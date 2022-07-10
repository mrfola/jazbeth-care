import AboutTemplate from "../../template/AboutTemplate/AboutTemplate";
import { useEffect } from "react";

const About = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <AboutTemplate/>
     );
}
 
export default About;