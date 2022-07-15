import UniversalOrganism from "../UniversalOrganism/UniversalOrganism";
import ImageText from "../ImageText/ImageText";

const ResidentialAndCommercialCleaning = () => 
{
    let homeCleaningImage = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901967/jazbeth/icons/services/home-cleaning-image_fu12jb.png";
    let homeCleaningIcon = "https://res.cloudinary.com/dobmssrgt/image/upload/v1657901967/jazbeth/icons/services/home-cleaning-icon_omxpdu.svg";

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