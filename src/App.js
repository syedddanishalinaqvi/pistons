import About from './components/About';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Testimonials/>
      <Footer/>
      <Feedback/>
    </div>
  );
}

export default App;
