import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import User from "./user/User";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Header from "./user/Header";

const Layout = () => {
  return (
    <div className="app">
      {/* <Header/>
      <Sidebar /> */}
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
