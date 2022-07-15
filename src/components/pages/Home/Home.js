import HomeTemplate from "../../template/HomeTemplate/HomeTemplate";
import { useEffect } from "react";
import Header from "../../ui/organisms/Header/Header";

const Home = () => 
{
    useEffect(() => 
    {
        window.scrollTo(0, 0);

    }, []);

    return ( 
        <>
            <Header/>
            <HomeTemplate/>

        </>
     );
}
 
export default Home;