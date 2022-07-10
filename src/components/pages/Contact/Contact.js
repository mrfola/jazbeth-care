import ContactTemplate from "../../template/ContactTemplate/ContactTemplate";
import { useEffect } from "react";

const Contact = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <ContactTemplate/>
     );
}
 
export default Contact;