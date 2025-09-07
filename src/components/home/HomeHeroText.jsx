import React from 'react'
import Video from "./video"

const HomeHeroText = () => {
    return (
        <>
            <div className='font-[font1] pt-5 text-center text-white'>
                <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>L'étincelle</div>
                <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>qui <div className='h-[7vw] w-[15vw] rounded-full -mt-3 overflow-hidden'><Video /></div>génère</div>
                <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>la créativité</div>
            </div>
        </>
    )
}

export default HomeHeroText