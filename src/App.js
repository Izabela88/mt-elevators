import Home from './components/Home/Home';
import About from './components/About/About';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

function App() {
  return (
    <div className='App'>
      <Toolbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
