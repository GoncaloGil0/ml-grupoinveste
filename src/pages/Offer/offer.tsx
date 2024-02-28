import { Hero } from '../../components/Heros';
import './offer.css';
import offer from '../../assets/bg/offer.avif';
import { useTranslation } from 'react-i18next';


export default function Offer() {
  const { t } = useTranslation();

  return (
    <main className='offer'>
      <Hero.Root img={offer} className='offerHero' textClassName='textOfferHero'>
        <Hero.Title title={t('offer.hero.title')} />
        <Hero.Description desc={t('offer.hero.subTitle')} />
      </Hero.Root>
      <div className='array'>
        <section id='consulting' >
          <h1>{t('offer.section1.title')} <span/></h1>
          <p>{t('offer.section1.text1')}</p>
          <p>{t('offer.section1.text2')}</p>
        </section>
        <section id='cybersecurity' >
          <h1>{t('offer.section2.title')} <span/></h1>
          <p>{t('offer.section2.text1')}</p>
          <p>{t('offer.section2.text2')}</p>
        </section>
        <section id='networking' >
          <h1>{t('offer.section3.title')} <span/></h1>
          <p>{t('offer.section3.text1')}</p>
          <p>{t('offer.section3.text2')}</p>
        </section>
        <section id='marketing' >
          <h1>{t('offer.section4.title')} <span/></h1>
          <p>{t('offer.section4.text1')}</p>
          <p>{t('offer.section4.text2')}</p>
        </section>
        <section id='gaming' >
          <h1>{t('offer.section5.title')} <span/></h1>
          <p>{t('offer.section5.text1')}</p>
          <p>{t('offer.section5.text2')}</p>
        </section>
      </div>
    </main>
  );
};

