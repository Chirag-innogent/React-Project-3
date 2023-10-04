import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Component/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route path="home" element={<Main />}  ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
