import React, { useState, useEffect } from 'react'
import CardBlock from './CardBlock'
import DarkMode from './DarkMode'
import {cards} from "./cards.js"
import { ReactComponent as SVGCards } from "../assets/SVG_layout_buttons/cards.svg"
import { ReactComponent as SVGDetails } from "../assets/SVG_layout_buttons/details.svg"
import { ReactComponent as SVGGallery } from "../assets/SVG_layout_buttons/gallery.svg"
import "../assets/SVG_layout_buttons/SVGstyles.css";


const Main = () => {
    const [view, setView] = useState('galleryView');
    const activeStyle = `grey`;
    useEffect(() => {
        let a = document.getElementsByClassName('clear');
        console.log(a)
        for(let n of a){
            n.style.color='rgb(241,241,241)';
        };
        document.querySelector(`#${view}`).style.color=activeStyle;
})
    function switchView(e) {
        let targetView;
        if(e.target.parentElement.id){targetView = e.target.parentElement.id}
        else {targetView = e.target.parentElement.parentElement.id}
        if (targetView !== view){setView(targetView)}
    }

    return (
        <>
            <section className="group settings">
                <article className="group layouts">
                    <div className="clear" id="galleryView"  onClick={switchView} title="Gallery view"><SVGCards/></div>
                    <div className="clear" id="listView" onClick={switchView} title="List view"><SVGDetails/></div>
                    <div className="clear" id="sliderView" onClick={switchView} title="Slider view"><SVGGallery/></div>
                </article>
                <article className="mode">
                    <DarkMode/>
                </article>
            </section>
            <section id="cardsContainer">
            {cards.map(group=><CardBlock key={group.id} {...group}></CardBlock>)}
            </section>
        </>
    ) 
}
export default Main;
