import ServicesTemplate from "../../template/ServicesTemplate/ServicesTemplate"
import { useEffect } from "react";


const Services = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <ServicesTemplate/>
     );
}
 
export default Services;