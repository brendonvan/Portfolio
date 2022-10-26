import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div className='header-wrapper'>
          <h1>
            <span>I'm used to</span> 
            <br></br>
            <span>tight </span>
            <span id='header-deadlines'>deadlines</span>
            <br></br> 
            <span>and </span>
            <span id='header-challenging'>challenging </span>  
            <span>tasks.</span>
          </h1>
          
          <div className='contact-info'>
            <a href='#projects'>VIEW PROJECTS</a>
            <h4>
              <span className='contact-points'><a href='https://github.com/brendonvan/' target="_blank" rel="noopener noreferrer"><img src="./icons/github.svg" alt="menu" /></a> </span>
              <span className='contact-points'><a href='https://www.linkedin.com/in/brendon-van/' target="_blank" rel="noopener noreferrer"><img src="./icons/linkedin.svg" alt="menu" /></a> </span>
              <span className='contact-points'><a href='https://twitter.com/BrendonVan_/' target="_blank" rel="noopener noreferrer"><img src="./icons/twitter.svg" alt="menu" /></a> </span>
              <span className='contact-points'><a href='https://www.instagram.com/brendon_van/' target="_blank" rel="noopener noreferrer"><img src="./icons/instagram.svg" alt="menu" /></a> </span>
            </h4>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
