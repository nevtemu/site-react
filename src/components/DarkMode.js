import React, { useState, useEffect } from 'react'
import './darkMode.css';

const DarkMode = () => {
    let style = {}
    const [darkMode, setMode] = useState(false);
    function switchMode (){
        const a = document.querySelector('.mode-switch-slider');
        const b = document.querySelector('.mode-switch-field');
        a.classList.remove('mode-switch-darkToLight');
        a.classList.remove('mode-switch-lightToDark')
        setMode(!darkMode)
        if(darkMode){
            a.classList.add('mode-switch-darkToLight');
            b.title="Switch to light mode";
        }
        else {
            a.classList.add('mode-switch-lightToDark');
            b.title="Switch to dark mode";            
        }
        


    }
    
        return (
            <div className="mode-switch-field" style={style} title="Switch to light mode" onClick={switchMode}>
                <div className="mode-switch-slider"></div>

            </div>
        )
}
export default DarkMode;