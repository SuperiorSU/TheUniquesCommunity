import './App.css';
import Foot from './components/about/Foot';
import Hero from './components/about/Hero';

import Navbar from './components/about/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='p-10'></div>
      <Foot/>
    </div>
  );
}

export default App;
