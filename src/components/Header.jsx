import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-left'><img src="./icons/BVFilm-source.svg" alt="logo" /></div>
                
                <div className='header-right'><img src="./icons/menu.svg" alt="menu" /></div>
            </div>
        </div>
    )
}

export default Header;