import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import NavMenu from './components/NavMenu';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <NavMenu />
          <Routes>
            <Route path="/" element={<Books />}>Home</Route>
            <Route path="/Category" element={<CategoryPage />}>Home</Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
