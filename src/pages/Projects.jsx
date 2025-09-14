import React, { useEffect } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Footer from '../components/common/footer';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [
        {
            image1:
                'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
            image2:
                'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
        },
        {
            image1:
                'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
            image2:
                'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
        },
        {
            image1:
                'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
            image2:
                'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
        },
        {
            image1:
                'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
            image2:
                'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
        },
    ];

    useEffect(() => {
        gsap.utils.toArray('.hero').forEach((hero) => {
            gsap.set(hero, { transformOrigin: 'top', scaleY: 0 }); // start collapsed

            gsap.to(hero, {
                scaleY: 1, // grow to full height
                scrollTrigger: {
                    trigger: hero,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                },
                ease: 'none',
            });
        });
    }, []);

    return (
        <section>
            <div className="lg:p-4 p-2  border border-black">
                <div className="pt-[45vh]">
                    <h2 className="font-[font2] text-6xl sm:text-[9.5vw] lg:text-10xl uppercase">Projets</h2>
                </div>

                <div className="-lg:mt-20 lol">
                    {projects.map((elem, idx) => (
                        <div
                            key={idx}
                            className="hero w-full mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 overflow-hidden rounded-lg"
                        >
                            <ProjectCard image1={elem.image1} image2={elem.image2} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Projects;
