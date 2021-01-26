import React from 'react'

const Card = ({name_eng, picture, description_eng}) => {
    let style = {
        backgroundImage: `url("${picture}")`
    }
        return (
            <div className="card" style={style}>
                <div className="name">{name_eng}</div>
                <div className="description">{description_eng}</div>
            </div>
        )
}
export default Card;