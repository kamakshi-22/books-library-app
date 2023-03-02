import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './App.scss';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Home />
  );
}

export default App;
