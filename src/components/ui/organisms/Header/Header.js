import styles from "./Header.module.sass";
import { Link, useLocation } from "react-router-dom";
import { useRef, useCallback, useEffect, useState } from "react";

const Header = () => 
{
    let logo = 'https://res.cloudinary.com/dobmssrgt/image/upload/v1657901964/jazbeth/icons/logo_nw6ivg.svg';

    const location = useLocation();
    const path = location.pathname;

    const modalRef = useRef(null);

    // Mobile Menu Dialog Box controls
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleHamburgerClick = () => 
    {
        if(mobileMenuOpen)
        {   
            setMobileMenuOpen(false);
            modalRef.current.close();
        }else 
        {
            setMobileMenuOpen(true);
        }
    }

    const escFunction = useCallback((event) => 
    {
        if (event.key === "Escape")  setMobileMenuOpen(false);

    }, []);


    useEffect(() => 
    {
        const modalNode = modalRef.current;

        if(mobileMenuOpen)
        {
            modalNode.removeAttribute('open');
            modalNode.showModal();

         }else 
         {
            modalNode.close();
         }

        document.addEventListener("keydown", escFunction, false);

        return () =>   
        {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [mobileMenuOpen]);

    return ( 
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            
            <div className={styles.desktopNav}>
                <nav>
                    <ul>
                        <li className={path == "/" ? styles.active : ""}><Link to="/">Home</Link></li>
                        <li className={path == "/services" ? styles.active : ""}><Link to="/services">Services</Link></li>
                        <li className={path == "/about" ? styles.active : ""}><Link to="/about">About Us</Link></li>
                        <li className={path == "/contact" ? styles.active : ""}><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>

            <div onClick={handleHamburgerClick} className={styles.mobileNav}>
                <div className={styles.hamburgerContainer}>
                    <div className={styles.hamburger}></div>
                </div>
            </div>

            <dialog ref={modalRef} className={styles.mobileMenuModal}>
                <div onClick={() => setMobileMenuOpen(false)} className={styles.closeIcon}></div>
                <div className={styles.modalChildren}>
                    <div className={styles.mobileLinks}>
                        <ul>
                            <li className={path == "/" ? styles.active : ""}><Link to="/">Home</Link></li>
                            <li className={path == "/services" ? styles.active : ""}><Link to="/services">Services</Link></li>
                            <li className={path == "/about" ? styles.active : ""}><Link to="/about">About Us</Link></li>
                            <li className={path == "/contact" ? styles.active : ""}><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </dialog>
        </div>
     );
}
 
export default Header;