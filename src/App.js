import './App.css';

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import LoginPage from './pages/login_front';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
