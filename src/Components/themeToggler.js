import React,{useContext} from "react"
import themeContext from "../Context/themeContext"

const ThemeToggler=()=>{
    const [themeMode,setThemeMode]=useContext(themeContext)
    return(
        <div onClick={()=>{
            setThemeMode(themeMode=== "light" ? "dark" : "light")
        }}>
            <span>{themeMode=== "light" ?"turn Off": "lights On"}</span>
        </div>
    )

}
export default ThemeToggler;