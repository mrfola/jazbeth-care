import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const Fumigation = () =>
{
    let fumigationImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901967/jazbeth/icons/services/fumigation-image_tc7jmh.png";
    let fumigationIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901966/jazbeth/icons/services/fumigation-icon_a8nwnz.svg";

    let fumigationBullets = 
    [
        "Fumigation is the only technique to kill the entire infestation from the root in order to prevent termites in the future.",
        "Sprays and treatments  only reach visible regions but fumigation reaches every nook and cranny of the property, including the cracks and crevices where termites build colonies.",
        "Fumigation is far better than employing poisonous chemicals for termite treatment, as the residue might be hazardous to one's health."
    ];

    return ( 
        <UniversalOrganism>
            <h3>What We Do</h3>
            <h2>Fumigation Services</h2>

            <ImageText
                icon={fumigationIcon}
                mainText="Fumigation is the use of chemical smoke to kill pests such as insects or rodents. 
                We will be your knight in shining armor in the event of an infestation in your home."
                bullets={fumigationBullets}
                image={fumigationImage}
                flipImage={true}
            />
        </UniversalOrganism>
        );
}
 
export default Fumigation;