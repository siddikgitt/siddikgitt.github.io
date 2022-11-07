import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;
