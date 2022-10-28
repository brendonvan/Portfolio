import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  let [showEmail, setShowEmail] = useState(false);
  function toggleEmail() {
    console.log(showEmail)
    if (!showEmail) {
        navigator.clipboard.writeText('brendon@van.digital');
        setShowEmail(true);
        
    } else {
        setShowEmail(false);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div className='header-wrapper'>
          <h1>
            <span id='greeting'>Hello, I'm </span>
            <span id='name'>Brendon Van</span>
            <br></br>
            <span id='title'></span>
            <div className='slider'>
              <div className='slider-text1'>APP DEVELOPER</div>
              <div className='slider-text2'>FRONT-END DEVELOPER</div>
              <div className='slider-text3'>SOFTWARE ENGINEER</div>
            </div>
            <br></br>
            <br></br>
            
          </h1>
          <div className='scroll-down'><span>scroll down ---{'>'}</span></div>
          <div className='contact-info'>
            <a href='#projects'>VIEW PROJECTS</a>
            <h4>
              <span className={ showEmail ? 'contact-points moved' : 'contact-points' }><a href='https://github.com/brendonvan/' target="_blank" rel="noopener noreferrer"><img src="./icons/github.svg" alt="github" /></a> </span>
              <span className={ showEmail ? 'contact-points moved' : 'contact-points' }><a href='https://www.linkedin.com/in/brendon-van/' target="_blank" rel="noopener noreferrer"><img src="./icons/linkedin.svg" alt="linkedin" /></a> </span>
              <span className={ showEmail ? 'contact-points email moved' : 'contact-points email' }><img onClick={ () => { toggleEmail() } } src="./icons/email.svg" alt="email" /> </span>
              <span className={ showEmail ? 'show-email' : 'hide-email' }>brendon@van.digital</span>
            </h4>
          </div>
          <div className={ showEmail ? 'show-hint' : 'hide-hint' }>---{'>'} Email copied to clipboard! {'<'}---</div>
        </div>
        <div className='about-me'>
          <h1>My Expertise</h1>
          <div className='about-me-desc'>
            <span>I'm used to </span> 
              <span>tight </span>
              <span id='header-deadlines'>deadlines</span>
              <br></br> 
              <span>and </span>
              <span id='header-challenging'>challenging </span>  
            <span>tasks.</span>
          </div>
          <div className='about-me-boxes'>
            <div className='about-me-box1'>
              <h6><span>Software</span> <br></br> <span>Development</span></h6>
              <p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
            </div>
            <div className='about-me-box2'>
              <h6><span>Frontend Dev</span> <br></br> <span>React, NextJS</span></h6>
              <p>Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
            </div>
            <div className='about-me-box3'>
              <h6><span>Flutter Dev</span> <br></br> <span>Android, iOS</span></h6>
              <p>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
            </div>
          </div>
        </div>
        <div className='projects'>
          <div className='project-header'>
            <div className='project-header-left'>
              <h1>My Work</h1>
            </div>
            <div className='project-header-right'>
              <h1>3D IMG HERE</h1>
            </div>
          </div>
          <div className='project-portfolio'>
            <div className='project-card stacked featured'>
              <img src="./projects/netflix.png" alt="tesla-project" />
              <div className='project-card-content'>
                <h2>Tesla Reimagined</h2>
                <p>Web Development</p>
              </div>
            </div>
            <div className='project-card stacked'>
              <img src="./projects/netflix.png" alt="netflix-project" />
              <div className='project-card-content'>
                <h2>Netflix Reimagined</h2>
                <p>Web Development</p>
              </div>
            </div>
            <div className='project-card stacked'>
              <img src="./projects/netflix.png" alt="spotify-project" />
              <div className='project-card-content'>
                <h2>Spotify Clone</h2>
                <p>Web Development</p>
              </div>
            </div>
            <div className='project-card stacked'>
              <img src="./projects/netflix.png" alt="2048-project" />
              <div className='project-card-content'>
                <h2>2048</h2>
                <p>Web Development</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
