import React from 'react'
import Search from './Search'
import BodyPart from './BodyPart'
const Category = ({ data, bodyPart, setbodyPart }) => {
    return (
        <>
            <div  className="avez_category_container">
                <div  className="avez_category_cards">
                    {data.map((item) => (
                        <div
                            key={item.id || item}
                            itemId={item.id || item}
                            title={item.id || item}>
                            {<BodyPart item={item} bodyPart={bodyPart} setbodyPart={setbodyPart}/>}
                        </div>
                    )
                    )}
                </div>
            </div>

        </>

    )
}

export default Category