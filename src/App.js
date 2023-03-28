import './assets/scss/app.scss';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/News" element={<News />} ></Route>
        <Route path="/Contact" element={<Contact />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
