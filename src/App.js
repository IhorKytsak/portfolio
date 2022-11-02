import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Skills from './pages/skills';
import Navbar from './components/navBar';
import { particles } from './utils/particles';
import './App.scss';

const App = () => {
  const location = useLocation().pathname;

  const renderParticlesJsInHomePage = location === '/';

  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className='App'>
      {renderParticlesJsInHomePage && (
        <Particles id='particles' options={particles} init={handleInit} />
      )}

      <Navbar />
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/contact' element={<Contact />} />
          <Route index path='/portfolio' element={<Portfolio />} />
          <Route index path='/resume' element={<Resume />} />
          <Route index path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
