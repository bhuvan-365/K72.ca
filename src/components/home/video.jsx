import React from 'react'
import Video from '../../../public/ad.mp4'

const video = () => {
    return (
        <>
            <div className='h-full w-full'>
                <video className='h-full w-full object-cover' autoPlay loop muted src={Video}></video>
            </div>
        </>
    )
}

export default video