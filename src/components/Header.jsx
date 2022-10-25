import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-left'><p>Brendon Van</p></div>
                <div className='header-right'><img src="./icons/menu.svg" alt="menu" /></div>
            </div>
        </div>
    )
}

export default Header;