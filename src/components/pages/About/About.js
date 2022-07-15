import AboutTemplate from "../../template/AboutTemplate/AboutTemplate";
import { useEffect } from "react";
import Header from "../../ui/organisms/Header/Header";

const About = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <>
            <Header/>
            <AboutTemplate/>
        </>
     );
}
 
export default About;