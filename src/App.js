import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyNavbar from "./component/Navbar";
import Dashboard from "./pages/dashboard.js";
import Users from "./pages/User.js";
import AddUser from "./pages/AddUser.js";
import Settings from "./pages/Setting.js";
import './App.css';

function App() {
  

  
return (
    <BrowserRouter>
      
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;