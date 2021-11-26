import React, { useContext } from 'react'
import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { ThemeContext } from '../../context'

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className="toggle">
            <img className="toggle-icon" src={Sun} alt="" />
            <img className="toggle-icon" src={Moon} alt="" />
            <div 
                className="toggle-button" 
                onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0 : 25 }}
            ></div>
        </div>
    )
}

export default Toggle
