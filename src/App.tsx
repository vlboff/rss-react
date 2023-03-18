import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import { Component } from 'react';

export class App extends Component<object, { path: string }> {
  state = {
    path: localStorage.getItem('pagePath') || '#/',
  };

  setPath = () => {
    localStorage.setItem('pagePath', location.hash);
    this.setState({ path: location.hash });
  };

  render() {
    return (
      <>
        <Header path={this.state.path} />
        <Routes>
          <Route path="/" element={<Home setPath={() => this.setPath()} />} />
          <Route path="/about" element={<AboutUs setPath={() => this.setPath()} />} />
          <Route path="*" element={<NotFound setPath={() => this.setPath()} />} />
        </Routes>
      </>
    );
  }
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
