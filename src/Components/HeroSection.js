import React,{useContext} from "react";
import themeContext from "../Context/themeContext";
import AppTheme from "../colors";
import ThemeToggler from "./themeToggler";



const HeroSection=()=>{
    const theme=useContext(themeContext)[0]
    const currentTheme=AppTheme[theme] // access to component either light or dark in apptheme

    return(
        
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign:"center"
        }}>

           
            
            <h1>Context Api Theme Toggler</h1>
            <p><strong>Button Controls Turn off/on</strong> </p>

            <button
            style={{backgroundColor: "#26ae60",
        padding: "10px 150px",
        fontSize: "20px",
        color: "#FFF",
        border: `${currentTheme.border}`}}
            >   <ThemeToggler/></button>
        </div>
    )

}

export default HeroSection;