import React from "react";
import { Route, Routes } from "react-router-dom";

import "./index.scss";
import Home from "./pages/Home";
import StartScreen from "./pages/StartScreen";
import UserPage from "./pages/UserPage";


function App() {
  const [startScreen, setStartScreen] = React.useState(true);

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setStartScreen(false);
      return () => {
        clearTimeout(timer)
      }
    },2000)
  },[])
  return (
    <div className="container">
     
  
    <Routes>
      <Route path="/" element={startScreen? <StartScreen/>:<Home/>}/>
      <Route path="/users/:id" element={<UserPage/>} />
      <Route path="*" element={<div>Not found</div>} />

    </Routes>
    </div>
  );
}

export default App;
