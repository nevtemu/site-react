import React from 'react'
import Card from './Card'

const CardBlock = ({group, cards}) => {
        return (
            <article className="group">
                <div className="groupName">{group}</div>
                {cards.map(card=><Card key={card.id} {...card}></Card>)}
            </article>
        )
}
export default CardBlock;