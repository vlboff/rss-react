import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
export default WrappedApp;
