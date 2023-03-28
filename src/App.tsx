import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Forms from './pages/Forms/Forms';
import NotFound from './pages/NotFound/NotFound';
import { useState } from 'react';

export function App() {
  const [currentPath, setCurrentPath] = useState(sessionStorage.getItem('pagePath') || '#/');

  const setPath = () => {
    sessionStorage.setItem('pagePath', location.hash);
    setCurrentPath(location.hash);
  };

  return (
    <>
      <Header path={currentPath} />
      <Routes>
        <Route path="/" element={<Home setPath={() => setPath()} />} />
        <Route path="/about" element={<AboutUs setPath={() => setPath()} />} />
        <Route path="/forms" element={<Forms setPath={() => setPath()} />} />
        <Route path="*" element={<NotFound setPath={() => setPath()} />} />
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
