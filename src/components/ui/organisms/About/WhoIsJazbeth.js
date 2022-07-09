import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import whoIsJazbethImage from "./../../../../assets/images/about/who-is-jazbeth.png";
import ImageText from "../ImageText/ImageText";

const WhoIsJazbeth = () => {
    return ( 
        <UniversalOrganism>
            <h3>About Us</h3>
            <h2>Who is Jabeth Care Limited? </h2>

            <ImageText
                mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis consectetur
                 diam cras sem ut. Habitant non eu, cursus enim, diam sagittis sit tortor magna. Mauris egestas 
                 proin ullamcorper elementum est sit facilisis. Odio vitae quis cras in facilisis vulputate enim. 
                 Sagittis elit porttitor lorem aliquet. Faucibus condimentum cras a tortor duis tristique. Leo ornare
                  malesuada donec duis imperdiet vitae. At justo nulla nunc, mauris. Cras purus neque vulputate diam 
                  aliquet nec. Nisl, sapien, scelerisque et senectus ultricies aliquet sapien, vulputate in. Non dolor
                   sodales velit diam suscipit ultrices interdum cursus. Nulla semper et et tempor in viverra morbi integer
                    dignissim. Tempor, orci malesuada in a quam a condimentum dui risus. Dictum pulvinar vestibulum blandit
                     sed massa rutrum id ac cursus."
                image={whoIsJazbethImage}
            />
        </UniversalOrganism>
     );
}
 
export default WhoIsJazbeth;