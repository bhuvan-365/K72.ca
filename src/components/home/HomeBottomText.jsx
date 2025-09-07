import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <>
            <div className='font-[font2] flex items-center justify-center gap-2 text-white overflow-x-hidden overflow-y-hidden'>
                <Link to='/projects' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] leading-[6vw] uppercase border-2 border-white rounded-full px-10 pt-5 p-0'>Project</Link>
                <Link to='/agence' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] leading-[6vw] uppercase border-2 border-white rounded-full px-10 pt-5 p-0 '>Agence</Link>

            </div>
        </>
    )
}

export default HomeBottomText