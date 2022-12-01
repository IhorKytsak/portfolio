import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Portfolio from '../pages/portfolio';
import Resume from '../pages/resume';
import Skills from '../pages/skills';

const AppRouter = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/contact' element={<Contact />} />
        <Route index path='/portfolio' element={<Portfolio />} />
        <Route index path='/resume' element={<Resume />} />
        <Route index path='/skills' element={<Skills />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
