import React from 'react'
import Builder from '../assets/assets/images/builder.png'
const Landing = () => {
    return (
        <>
            <div  className="avez_overlay_gym"></div>
            <section  className="avez_gym_section1" >
                <div  className="avez_main_text_image_container">
                    <div  className="avez_main_text">
                        <div  className="avez_main_text_1">
                            <h1>HARD ROCK GAME</h1>
                        </div>
                        <div  className="avez_main_text_2">
                            <h1>TIME TO CHANGE</h1>
                        </div>
                        <div  className="avez_main_image">
                            <img src={Builder} alt=""   />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing