import React, { useState, useEffect } from 'react'
import './darkMode.css';

const DarkMode = () => {
    let style = {}
    const [darkMode, setMode] = useState(false);
    function switchMode (){
        const a = document.querySelector('.mode-switch-slider');
        // a.classList.toggle('mode-switch-light');
        // a.classList.toggle('mode-switch-dark');
        a.classList.remove('mode-switch-darkToLight');
        a.classList.remove('mode-switch-lightToDark')
        setMode(!darkMode)
        if(darkMode){
            a.classList.add('mode-switch-darkToLight');
        }
        else {
            a.classList.add('mode-switch-lightToDark');
        }
        


    }
    
        return (
            <div className="mode-switch-field" style={style} title="Switch to light mode" onClick={switchMode}>
                <div className="mode-switch-slider"></div>

            </div>
        )
}
export default DarkMode;