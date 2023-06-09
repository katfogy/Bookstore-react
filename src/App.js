import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavMenu from './components/NavMenu';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <div className="Apps">
      <Router>
        <>
          <NavMenu />
          <Routes>
            <Route path="/" element={<HomePage />}>Home</Route>
            <Route path="/Category" element={<CategoryPage />}>Home</Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
