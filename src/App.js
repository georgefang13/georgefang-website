import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          <div>
            <a href="https://www.instagram.com/georgefang23
            " target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/georgefang1?challengeId=AQE4XGAe16ikmAAAAY2tgsqTOmaX1w3coqkCjDeJWssizPdzKFs1Tqr4ACz-goik3vEN18BZRi-vN3xaQTZsrnY7p50DYdO7NQ&submissionId=3598bedf-d014-b417-18aa-ed43d06bfd2d&challengeSource=AgH10brAugr1FAAAAY2tgweHA-o-_PeNyVt0P4aKrjg51nAwfjX5QTVzsm05eXE&challegeType=AgE-7E2UuWB5fwAAAY2tgweLbO4WC_ithHd3LYiRi5WhPj2QkVIL_fY&memberId=AgHcIDtC9JItMwAAAY2tgweOrDmMR8JzJtI9R2iESJV7414&recognizeDevice=AgFl1_Eh17wkqQAAAY2tgweSNc5oULbMx7kXELZuo4tbycRssv0N" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/georgefang13" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
          </ul>
        </nav>

        <div style={{ paddingTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
