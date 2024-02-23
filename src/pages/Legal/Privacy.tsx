import { useTranslation } from "react-i18next";
import "./styles.css"
import { Hero } from "../../components/Heros";
import cookies from '../../assets/bg/cookes.jpg'


export default function Privacy() {
    const { t } = useTranslation();

    return (<main className="legal">
        <Hero.Root
            img={cookies}
        >
            <Hero.Title title={t('privacy.hero.title')} />
            <Hero.Description desc={t('privacy.hero.subTitle')} />
        </Hero.Root>
        <div className="textSection">
            <p>{t('privacy.description')}</p>
            <p className="mt-4">{t('privacy.description2')}</p>
            <h2 className="mt-10">{t('privacy.sec1.title')}</h2>
            <p>{t('privacy.sec1.text')}</p>
            <h5 className="mt-10">{t('privacy.sec1.div1.title')}</h5>
            <p>{t('privacy.sec1.div1.text')}</p>
            <h5 className="mt-10">{t('privacy.sec1.div2.title')}</h5>
            <p>{t('privacy.sec1.div2.text')}</p>
            <h5 className="mt-10">{t('privacy.sec1.div3.title')}</h5>
            <p>{t('privacy.sec1.div3.text')}</p>
            <h5 className="mt-10">{t('privacy.sec1.div4.title')}</h5>
            <p>{t('privacy.sec1.div4.text')}</p>
            <h5 className="mt-10">{t('privacy.sec1.div5.title')}</h5>
            <p>{t('privacy.sec1.div5.text')}</p>
            <h5 className="mt-10">{t('privacy.sec1.div6.title')}</h5>
            <p>{t('privacy.sec1.div6.text')}</p>
            <h2 className="mt-10">{t('privacy.sec2.title')}</h2>
            <p>{t('privacy.sec2.text')}</p>
            <h2 className="mt-10">{t('privacy.sec3.title')}</h2>
            <p>{t('privacy.sec3.text')}</p>
        </div>
    </main>)
}