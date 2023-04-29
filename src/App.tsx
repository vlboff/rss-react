import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Forms from './pages/Forms/Forms';
import NotFound from './pages/NotFound/NotFound';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setCurrentPath } from './store/currentPathSlice';

export function App() {
  const currentPath = useAppSelector((state) => state.currentPath.currentPath);

  const dispatch = useAppDispatch();

  const setPath = () => {
    dispatch(setCurrentPath(location.hash));
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
