import React, { useRef } from 'react';
import { Hero } from '../../components/Heros';
import './offer.css';
import offer from '../../assets/bg/offer.avif';
import { useTranslation } from 'react-i18next';

interface SectionRefs {
  consulting: React.MutableRefObject<HTMLElement | null>;
  cybersecurity: React.MutableRefObject<HTMLElement | null>;
  networking: React.MutableRefObject<HTMLElement | null>;
  marketing: React.MutableRefObject<HTMLElement | null>;
  gamming: React.MutableRefObject<HTMLElement | null>;
}

const Offer: React.FC = () => {
  const { t } = useTranslation();

  const sectionRefs: SectionRefs = {
    consulting: useRef(null),
    cybersecurity: useRef(null),
    networking: useRef(null),
    marketing: useRef(null),
    gamming: useRef(null),
  };

  return (
    <main className='offer'>
      <Hero.Root img={offer} className='offerHero' textClassName='textOfferHero'>
        <Hero.Title title={t('offer.hero.title')} />
        <Hero.Description desc={t('offer.hero.subTitle')} />
      </Hero.Root>
      <div className='array'>
        <section id='consulting' ref={sectionRefs.consulting}>
          <h1>{t('offer.section1.title')} <span style={{ borderColor: `${"#000"}` }} /></h1>
          <p>{t('offer.section1.text1')}</p>
          <p>{t('offer.section1.text2')}</p>
        </section>
        <section id='cybersecurity' ref={sectionRefs.cybersecurity}>
          <h1>{t('offer.section2.title')} <span style={{ borderColor: `${"#000"}` }} /></h1>
          <p>{t('offer.section2.text1')}</p>
          <p>{t('offer.section2.text2')}</p>
        </section>
        <section id='networking' ref={sectionRefs.networking}>
          <h1>{t('offer.section3.title')} <span style={{ borderColor: `${"#000"}` }} /></h1>
          <p>{t('offer.section3.text1')}</p>
          <p>{t('offer.section3.text2')}</p>
        </section>
        <section id='marketing' ref={sectionRefs.marketing}>
          <h1>{t('offer.section4.title')} <span style={{ borderColor: `${"#000"}` }} /></h1>
          <p>{t('offer.section4.text1')}</p>
          <p>{t('offer.section4.text2')}</p>
        </section>
        <section id='gaming' ref={sectionRefs.gamming}>
          <h1>{t('offer.section5.title')} <span style={{ borderColor: `${"#000"}` }} /></h1>
          <p>{t('offer.section5.text1')}</p>
          <p>{t('offer.section5.text2')}</p>
        </section>
      </div>
    </main>
  );
};

export default Offer;
