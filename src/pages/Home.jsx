import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
const Home = () => {
    return (
        <>
            <div>
                <div className="h-screen w-screen fixed">
                    <Video />
                </div>
                <div className="h-screen w-screen relative flex flex-col text-white justify-between pb-5 overflow-hidden">
                    <HomeHeroText />
                    <HomeBottomText />
                </div>
            </div>
        </>
    )
}

export default Home