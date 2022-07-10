import HomeTemplate from "../../template/HomeTemplate/HomeTemplate";
import { useEffect } from "react";

const Home = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <HomeTemplate/>
     );
}
 
export default Home;