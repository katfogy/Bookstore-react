import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavMenu from './components/NavMenu';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <NavMenu />
          <Routes>
            <Route path="/" element={<Homepage />}>Home</Route>
            <Route path="/Category" element={<CategoryPage />}>Home</Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
