import { Children, createContext, useState } from "react";


export const ThemeContext = createContext();


export const ThemeContextProvider = ({children})=>{
  
    const [DarkMode,setDarkMode] = useState(false);

    const modeChange = ()=>{
        setDarkMode(!DarkMode);
     }
    
   return <ThemeContext.Provider value={{DarkMode,setDarkMode,modeChange}}>
      {children}
   </ThemeContext.Provider> 
}