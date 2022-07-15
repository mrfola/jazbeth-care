import ContactTemplate from "../../template/ContactTemplate/ContactTemplate";
import { useEffect } from "react";
import Header from "../../ui/organisms/Header/Header";

const Contact = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <>
            <Header/>
            <ContactTemplate/>  
        </>
     );
}
 
export default Contact;