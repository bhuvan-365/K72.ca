import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {

    gsap.registerPlugin(ScrollTrigger)

    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    const imageArray = [
        '../../public/agenceimg/img1.jpg',
        '../../public/agenceimg/img2.jpg',
        '../../public/agenceimg/img3.jpg',
        '../../public/agenceimg/img4.jpg',
        '../../public/agenceimg/img5.jpg',
        '../../public/agenceimg/img6.jpg',
        '../../public/agenceimg/img7.jpg',
        '../../public/agenceimg/img8.jpg',
        '../../public/agenceimg/img9.jpg',
        '../../public/agenceimg/img10.jpg',
        '../../public/agenceimg/img11.jpg',
        '../../public/agenceimg/img12.jpg',
        '../../public/agenceimg/img13.jpg',
        '../../public/agenceimg/img14.jpg'

    ]

    useGSAP(function () {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                markers: false,
                start: 'top 28%',
                end: 'top -180%',
                scrub: true,
                pin: true,
                onUpdate: (elem) => {
                    // console.log(Math.floor(elem.progress * imageArray.length))
                    // const imageIndex = Math.floor(elem.progress * imageArray.length)
                    let imageIndex;
                    if (elem.progress < 1) {
                        imageIndex = Math.floor(elem.progress * imageArray.length)
                    } else {
                        imageIndex = imageArray.length - 1
                    }
                    imageRef.current.src = imageArray[imageIndex]
                }
            }

        })
    })
    return (
        <>
            <div className='section1'>
                <div ref={imageDivRef} className=' absolute h-[20vw] rounded-3xl w-[14vw] top-48 left-[30vw] overflow-hidden'>
                    <img ref={imageRef} className='h-full w-full object-cover' src="../../public/agenceimg/img1.jpg" alt="img 1" />
                </div>
                <div className='relative font-[font2] text-white'>
                    <div className='mt-[55vh]'>
                        <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br /> Douze</h1>
                        <div className='pl-[40%] mt-20 p-3'>
                            <p className='text-6xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section2 h-screen'>

            </div>

        </>

    )
}

export default Agence