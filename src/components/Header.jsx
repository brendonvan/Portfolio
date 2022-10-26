import './Header.css';
import { useState, useEffect } from 'react'


const Header = () => {
    let [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        console.log(menuOpen)
        if (!menuOpen) {
            setMenuOpen(true);
            
        } else {
            setMenuOpen(false);
        }
    }

    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-left'><img src="./icons/BVFilm-source.svg" alt="logo" /></div>
                
                <div className={ menuOpen ? 'header-right open' : 'header-right' }>
                    <div className='header-menu' onClick={ () => { toggleMenu() } }>
                        <span className='line-1'></span>
                        <span className='line-2'></span>
                        <span className='line-3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;