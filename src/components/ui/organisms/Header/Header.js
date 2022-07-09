import styles from "./Header.module.sass";
import { Link, useParams } from "react-router-dom";
import logo from './../../../../assets/icons/logo.svg';
import { useRef, useCallback, useEffect, useState } from "react";

const Header = () => 
{
    const [path, setPath] = useState(document.location.pathname)

    const modalRef = useRef(null);

    // Mobile Menu Dialog Box controls
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleHamburgerClick = () => 
    {
        mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
    }

    const escFunction = useCallback((event) => 
    {
        if (event.key === "Escape")  setMobileMenuOpen(false);

    }, []);


    useEffect(() => 
    {
        // setPath(document.location.pathname);

        const modalNode = modalRef.current;

        (mobileMenuOpen) ? modalNode.showModal() : modalNode.close();

        document.addEventListener("keydown", escFunction, false);

        return () =>   document.removeEventListener("keydown", escFunction, false);
    });

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