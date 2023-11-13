import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/Detail/Detail";
import Form from "./components/Form/Form";
import Create from "./views/Create/Create";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="home/detail/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
