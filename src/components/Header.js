import React, { useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {

  const { isLightTheme, light, dark, changeTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark

  return (
    <div className=" banner row col s12" style = {{backgroundColor: theme.header, color: theme.headerColor}}>
      <h1 className="title col s10"> Plan!</h1>
      <p className="col s2">{
        isLightTheme 
        ? <i className="fas fa-moon" onClick={changeTheme}/>
        : <i className="fas fa-sun" onClick={changeTheme}/>
      }</p>
    </div>
  )

}

export default Header;