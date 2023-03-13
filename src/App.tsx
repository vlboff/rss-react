import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
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
