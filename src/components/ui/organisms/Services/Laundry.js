import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const Laundry = () => 
{

    let laundryImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901968/jazbeth/icons/services/laundry-image_o3t5mu.png";
    let laundryIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901968/jazbeth/icons/services/laundry-icon_kbffeg.svg";

    let laundryBullets = 
    [
        "You need a chill pill after the entire stress of the day. Jazbeth will care for your clothes, you’d wish you were a shirt.",
        " This eliminates the time and effort connected with doing your own laundryall at a very affordable rate.",
        "Our wash process is fast, effective and ensures that your clothes are gently washed, stains are eradicated, and your garments are returned to you in beautiful shape."
    ];

    return ( 
        <UniversalOrganism>
            <h3>What We Do</h3>
            <h2>Laundry Services</h2>

            <ImageText
                icon={laundryIcon}
                mainText="Laundry refers to the washing of garments and other fabrics, as well as their drying and ironing. 
                Nothing smells quite as good as clean laundry."
                bullets={laundryBullets}
                image={laundryImage}
            />
        </UniversalOrganism>
        );
}
 
export default Laundry;