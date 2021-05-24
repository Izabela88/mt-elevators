import { Fragment } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Services from './components/Services/Services';

function App() {
  return (
    <Fragment>
      <Toolbar />
      <Home />
      <About />
      <Services />
    </Fragment>
  );
}

export default App;
