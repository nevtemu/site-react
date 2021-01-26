import React from 'react'
import Layout from './Layout'
import Card from './Card'
import {cards} from "./cards.mjs"

const Main = () => {
    return (
        <>
        <Layout/>
        <section>
        {cards.map(card=><Card key={card.id} {...card}></Card>)}
    </section>
    </>
    ) 
}
export default Main;