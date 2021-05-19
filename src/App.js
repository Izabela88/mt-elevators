import { Fragment } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

function App() {
  return (
    <Fragment>
      <Toolbar />
      <Home />
      <About />
    </Fragment>
  );
}

export default App;
