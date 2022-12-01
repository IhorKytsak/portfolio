import { useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Navbar from './components/navBar';
import { particles } from './utils/particles';
import './App.scss';
import AppRouter from './router/AppRouter';

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
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
