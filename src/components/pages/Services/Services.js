import ServicesTemplate from "../../template/ServicesTemplate/ServicesTemplate"
import { useEffect } from "react";
import Header from "../../ui/organisms/Header/Header";


const Services = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <>
            <Header/>
            <ServicesTemplate/>
        </>
     );
}
 
export default Services;