import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './App.scss';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
