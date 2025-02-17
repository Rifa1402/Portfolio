import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Qualification from './components/Qualification';
import Project from './components/Project';
import Resume from './components/Resume';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (

    <div className="App">
      <Navbar/>

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/qualification" element={<Qualification/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
