import React,{useState} from "react";
import themeContext from "./Context/themeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App=()=>{
const themeHook=useState("light")
return(
  <themeContext.Provider  value={themeHook}>
    <div>
      <Header/>
        <HeroSection/>
     
    </div>

  </themeContext.Provider>
)

}
export default App;

