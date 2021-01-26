import React, { useState, useEffect } from 'react'
import Card from './Card'
import {cards} from "./cards.js"
import { ReactComponent as SvgGallery } from "../assets/th-large-solid.svg"
import { ReactComponent as SvgList } from "../assets/th-list-solid.svg"


const Main = () => {
    const [view, setView] = useState('galleryView');
    useEffect(() => {document.querySelector('#cardsContainer').classList='group'
    document.querySelector('#cardsContainer').classList.add(view)})
    function switchView(e) {
        let target;
        if(e.target.parentElement.id){target = e.target.parentElement.id}
        else {target = e.target.parentElement.parentElement.id}
        // console.log(`target - ${target}`)
        // console.log(`view - ${view}`)
        // console.log(target !== view)
        if (target !== view){setView(target)}
    }

    
    return (
        <>
            <section className="group layouts">
                <div className="clear" id="galleryView" onClick={switchView}><SvgGallery/></div>
                <div className="clear" id="listView" onClick={switchView}><SvgList/></div>
            </section>
            <section id="cardsContainer" className="group">
            {cards.map(card=><Card key={card.id} {...card}></Card>)}
            </section>
        </>
    ) 
}
export default Main;
