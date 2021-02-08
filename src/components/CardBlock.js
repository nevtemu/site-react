import React from 'react'
import Card from './Card'

const CardBlock = ({group, cards}) => {
        return (
            <>
            <div className="groupName">{group}</div>
            <article className="group cardBlock">
                {cards.map(card=><Card key={card.id} {...card}></Card>)}
            </article>
            </>
        )
}
export default CardBlock;