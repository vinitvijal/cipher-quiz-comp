import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
    
  );
}

export default App;
