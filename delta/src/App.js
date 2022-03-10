import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav";
import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Nav />} />
        <Route path="/table" element={<Table />} />
        <Route path="/login" element={<Login isLogin={true} />} />
        <Route path="/register" element={<Login isLogin={false} />} />
      </Routes>
    </div>
  );
}

export default App;
