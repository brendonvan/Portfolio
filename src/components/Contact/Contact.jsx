import './Contact.css';
import { useState } from 'react';

const Contact = () => {
    let [showEmail, setShowEmail] = useState(false);
    const toggleEmail = () => {
        if (!showEmail) {
            navigator.clipboard.writeText('brendon@van.digital');
            setShowEmail(true);
        } else {
            setShowEmail(false);
        }
    }
    return (
        <div className='contact'>
            <div className='contact__info'>
                <span className={ showEmail ? 'contact__points moved' : 'contact__points' }><a href='https://github.com/brendonvan/' target="_blank" rel="noopener noreferrer"><img src="./icons/github.svg" alt="github" /></a> </span>
                <span className={ showEmail ? 'contact__points moved' : 'contact__points' }><a href='https://www.linkedin.com/in/brendon-van/' target="_blank" rel="noopener noreferrer"><img src="./icons/linkedin.svg" alt="linkedin" /></a> </span>
                <span className={ showEmail ? 'contact__points email moved' : 'contact__points email' }><img onClick={ () => { toggleEmail() } } src="./icons/email.svg" alt="email" /> </span>
                <p><span className={ showEmail ? 'show-email' : 'hide-email' }>brendon@van.digital</span></p>
            </div>
            <div className={ showEmail ? 'show-hint' : 'hide-hint' }>---{'>'} Email copied to clipboard! {'<'}---</div>
        </div>
    );
}

export default Contact;