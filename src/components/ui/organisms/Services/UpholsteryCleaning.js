import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const UpholsteryCleaning = () => 
{
    let upholsteryIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901968/jazbeth/icons/services/upholstery-icon_t2umpy.svg";
    let upholsteryImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901962/jazbeth/images/upholstery-image_tpds78.png";

    let upholsteryBullets = 
    [
        "Professional rug cleaning is required because we understand how to extend the life of your carpet.",
        "When you hire professionals for odor removal and carpet cleaning, all you need is take a back seat and watch the entire procedure unfold. Let us save you time and stress.",
        "With our assistance, you may help prevent against a variety of unpleasant, inconvenient, and deadly health disorders."
    ];


    return ( 
        <UniversalOrganism>
            <h3>What We Do</h3>
            <h2>Upholstery Cleaning</h2>

            <ImageText
                icon={upholsteryIcon}
                mainText=" Upholstery is the fabric and padding that covers your furniture. 
                The cleaning of these fabrics and paddings requires great deal of expertise and is best left to professionals like us."
                bullets={upholsteryBullets}
                image={upholsteryImage}
                flipImage={true}
            />
        </UniversalOrganism>
     );
}
 
export default UpholsteryCleaning;