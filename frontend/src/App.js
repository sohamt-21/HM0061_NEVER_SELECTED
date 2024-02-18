import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainRender from './pages/MainRender';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' Component={MainRender} />
          <Route path='/profile' Component={Profile} />
        </Routes>
      </>
    </div>
  );
}

export default App;
