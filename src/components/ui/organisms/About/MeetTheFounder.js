import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import meetTheFounderImage from "./../../../../assets/images/about/meet-the-founder.png";
import ImageText from "../ImageText/ImageText";

const MeetTheFounder = () => 
{
    return ( 
        <UniversalOrganism>
        <h3>About Us</h3>
        <h2>Meet The Founder</h2>

        <ImageText
            mainText={<p>Jazbeth Care Limited was founded by Adenike Ogunjenyo. She is a graduate of Olabi Onabanjo University with a Bachelor of Arts degree (English). 
            <br/><br/> Due to the Covid 19 pandemic which let to businesses going handicap and nations wallowing in debt, Adenike was greatly disturbed. Deciding not to allow the pandemic weaking her will to remain indoors and do nothing, with grit and consistency, she established her own cleaning services.
            <br/><br/> One of her motivations towards doing this was to ensure that the people around her always had a clean and healthy atmosphere.</p>}
            image={meetTheFounderImage}
            flipImage={true}
        />
    </UniversalOrganism>
     );
}
 
export default MeetTheFounder;