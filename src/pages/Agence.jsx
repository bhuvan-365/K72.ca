import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/common/footer'


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
                start: 'top -15%',
                end: 'top -250%',
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: 'transform',
                scrub: 1, // smooth scrubbing with 1s easing
                anticipatePin: 1,
                invalidateOnRefresh: true,


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
            <div className='section1 text-black'>
                <div ref={imageDivRef} className='z-[-1] absolute h-[150px] lg:h-[20vw] rounded-3xl w-[120px] lg:w-[14vw] sm:top-20 lg:top-0 top-10 sm:left-[30vw] left-[10vw] overflow-hidden'>
                    <img ref={imageRef} className=' h-full w-full object-cover' src="../../public/agenceimg/img1.jpg" alt="img 1" />
                </div>
                <div className='relative font-[font2] !z-40'>
                    <div className='mt-[55vh]'>
                        <h1 className='text-5xl sm:text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br /> Douze</h1>
                        <div className='pl-[30%] sm:pl-[40%] mt-20 p-3'>
                            <p className='text-xl sm:text-6xl lg:text-[3.5rem] leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section2 px-10 lg:px-20  sm:px-32 py-20 !z-40'>
                <div className="top flex sm:flex-row flex-col justify-start items-start gap-10 sm:gap-72 ">
                    <div className="box text-2xl font-semibold">Expertise</div>
                    <div className="box">
                        <ul class="list-none text-2xl font-semibold sm:ml-0 ml-10">
                            <li>Stratégie</li>
                            <li>Publicité</li>
                            <li>Branding</li>
                            <li>Design</li>
                            <li>Contenu</li>
                        </ul>

                    </div>
                </div>
                <div className='sm:mt-0 mt-32  text-[0.8rem] lg:text-[1rem] sm:text-[1.2rem] font-semibold flex sm:flex-row flex-col justify-center items-start py-28 gap-5 !z-50'>
                    <div>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</div>
                    <div>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</div>
                    <div>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</div>
                </div>

            </div>

            <Footer />

        </>

    )
}

export default Agence