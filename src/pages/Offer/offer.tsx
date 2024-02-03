import React, { useEffect, useRef, useState } from 'react';
import { Hero } from '../../components/Heros'
import './offer.css';
import offer from '../../assets/bg/offer.avif'
interface SectionRefs {
    consulting: React.MutableRefObject<HTMLElement | null>;
    cybersecurity: React.MutableRefObject<HTMLElement | null>;
    networking: React.MutableRefObject<HTMLElement | null>;
    marketing: React.MutableRefObject<HTMLElement | null>;
    gamming: React.MutableRefObject<HTMLElement | null>;
}

export default function Offer() {
    const sectionRefs: SectionRefs = {
        consulting: useRef(null),
        cybersecurity: useRef(null),
        networking: useRef(null),
        marketing: useRef(null),
        gamming: useRef(null),
    };

    const [visibleSection, setVisibleSection] = useState<string | null>(null);

    const checkVisibility = () => {
        let currentVisible: string | null = null;

        Object.keys(sectionRefs).forEach((sectionKey, index, array) => {
            const section = sectionKey as keyof SectionRefs;
            const scrollDiv = sectionRefs[section].current;

            if (scrollDiv) {
                const rect = scrollDiv.getBoundingClientRect();
                const centerY = rect.top + rect.height / 1;

                if (centerY >= window.innerHeight * 0.2 && centerY <= window.innerHeight * 0.8) {
                    currentVisible = section;
                }
            }

            if (index === array.length - 1 && currentVisible === null) {
                const firstSection = array[0] as keyof SectionRefs;
                currentVisible = firstSection;
            }
        });

        setVisibleSection(currentVisible || null);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    useEffect(() => {
        checkVisibility();
    }, []);

    return (
        <main className='offer'>
            <Hero.Root
                img={offer}
                className='offerHero'
                textClassName='textOfferHero'
             >
                <Hero.Title title="A nossa oferta" />
                <Hero.Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit." />      
            </Hero.Root>
            <div className='array'>
                <section className={visibleSection === 'consulting' ? 'visible' : ''} id='consulting' ref={sectionRefs.consulting}>
                    <h1 >consulting <span style={{ borderColor: `${"#000"}` }} /></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </section>
                <section className={visibleSection === 'cybersecurity' ? 'visible' : ''} id='cybersecurity' ref={sectionRefs.cybersecurity}>
                    <h1 >cybersecurity <span style={{ borderColor: `${"#000"}` }} /></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </section>
                <section className={visibleSection === 'networking' ? 'visible' : ''} id='networking' ref={sectionRefs.networking}>
                    <h1 >networking <span style={{ borderColor: `${"#000"}` }} /></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </section>
                <section className={visibleSection === 'marketing' ? 'visible' : ''} id='marketing' ref={sectionRefs.marketing}>
                    <h1 >marketing <span style={{ borderColor: `${"#000"}` }} /></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </section>
                <section className={visibleSection === 'gamming' ? 'visible' : ''} id='gaming' ref={sectionRefs.gamming}>
                    <h1 >gaming <span style={{ borderColor: `${"#000"}` }} /></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </section>
            </div>
        </main>
    )
}
