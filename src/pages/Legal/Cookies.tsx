import { useTranslation } from "react-i18next";
import "./styles.css"
import { Hero } from "../../components/Heros";
import cookies from '../../assets/bg/cookes.jpg'

export default function Cookies() {
    const { t } = useTranslation();

    return (<main className="legal">
        <Hero.Root
            img={cookies}
        >
            <Hero.Title title={t('cookies.hero.title')} />
            <Hero.Description desc={t('cookies.hero.subTitle')} />
        </Hero.Root>
        <div className="textSection">
            <p>{t('cookies.description')}</p>
            <h2 className="mt-10">{t('cookies.sec1.title')}</h2>
            <p>{t('cookies.sec1.text')}</p>
            <h2 className="mt-10">{t('cookies.sec2.title')}</h2>
            <p>{t('cookies.sec2.text')}</p>
            <h2 className="mt-10">{t('cookies.sec3.title')}</h2>
            <p>{t('cookies.sec3.text')}</p>
            <h2 className="mt-10">{t('cookies.sec4.title')}</h2>
            <p>{t('cookies.sec4.text')}</p>
            <h2 className="mt-10">{t('cookies.sec5.title')}</h2>
            <p>{t('cookies.sec5.text')}</p>
            <h2 className="mt-10">{t('cookies.sec6.title')}</h2>
            <p>{t('cookies.sec6.text')}</p>
            <h2 className="mt-10">{t('cookies.sec7.title')}</h2>
            <p>{t('cookies.sec7.text')}</p>
            <h2 className="mt-10">{t('cookies.sec8.title')}</h2>
            <p>{t('cookies.sec8.text')}</p>
        </div>

    </main>)
}