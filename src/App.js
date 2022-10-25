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
            <h4>👾 GH 🐦 TW 💼 LD 📸 IN</h4>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
