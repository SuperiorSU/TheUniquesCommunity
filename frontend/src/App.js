import logo from './logo.svg';
import './App.css';
import Button from './components/leads/Button';
import { Route, Routes } from 'react-router-dom';
import Button2 from './components/leads/Button2';
import Leadpage from './components/leads/Leadpage';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/leads' element={<Leadpage text="Lead a Club" />} />
      </Routes>
    </div>
  );
}

export default App;
