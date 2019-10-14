import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const [ isLightTheme, setTheme ] = useState(true);
  const light = { header:'rgba(0,120,35,.7)', headerColor:'white', bg:'white', color: 'black', ui: 'rgba(0,0,0,.3)', icons: 'rgba(255,255,255,.7)'};
  const dark = { header:'rgba(0,120,35,.7)', headerColor: 'rgb(4, 4, 17)', bg:'rgb(4, 4, 17)', color: 'white', ui: 'rgba(255,255,255,.3)', icons: 'rgba(255,255,255,.7)'};

  const changeTheme = () => {
    setTheme(!isLightTheme);
  }

  return(
    <ThemeContext.Provider value= {{ isLightTheme, light, dark, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
  
}

export default ThemeContextProvider;