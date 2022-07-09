import homeCleaningImage from "./../../../../assets/icons/services/home-cleaning-image.png";
import homeCleaningIcon from "./../../../../assets/icons/services/home-cleaning-icon.svg";
import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const ResidentialAndCommercialCleaning = () => 
{
    let houseCleaningBullets = 
    [
        "Our thorough and professional cleaning leaves you with fresh, clean, and healthy indoor air.",
        "Save money in advance as your cherished furnitures and equipements degrade if not regularly deep cleaned with professional tools and processes.",
        "With our assistance, you may help prevent against a variety of unpleasant, inconvenient, and deadly health disorders."
    ];

    return ( 
        <UniversalOrganism>
            <h3>What We Do</h3>
            <h2>Residential and Commercial Cleaning</h2>

            <ImageText
                icon={homeCleaningIcon}
                mainText="From  floors to your bedrooms, bathrooms, office equipments down to your sofa and couches, 
                the overall cleanliness of your home and offices is guaranteed."
                bullets={houseCleaningBullets}
                image={homeCleaningImage}
            />
        </UniversalOrganism>
     );
}
 
export default ResidentialAndCommercialCleaning;