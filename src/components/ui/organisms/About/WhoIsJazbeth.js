import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const WhoIsJazbeth = () => 
{
    let whoIsJazbethImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901972/jazbeth/images/about/who-is-jazbeth_b3udbd.png";

    return ( 
        <UniversalOrganism>
            <h3>About Us</h3>
            <h2>Who is Jabeth Care Limited? </h2>

            <ImageText
                mainText={<p>Jazbeth Care is Limited is a company dedicated to meeting the needs and aspirations of people, 
                    organizations such as hotels, facility management companies (both industrial and residential), and individuals 
                    in maintaining a healthy and clean environment. <br/><br/> We not only provide services to residential, industrial, 
                    and commercial establishments, but we also manufacture cleaning materials and provide necessary cleaning accessories.
                    <br/><br/> With Jazbeth Care, you will no longer have to bother about cleaning your surroundings, fumigation, or purchasing 
                    cleaning supplies since we will do all of that for you.</p>}
                                
                image={whoIsJazbethImage}
            />
        </UniversalOrganism>
     );
}
 
export default WhoIsJazbeth;