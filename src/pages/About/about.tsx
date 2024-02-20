import { Hero } from "../../components/Heros";
import Quote from "../../components/Quote/quote";
import { Section } from "../../components/Section";
import BtnScrool from "../../components/animation/BtnScrool/btnScrool";
import { dataEmpresas } from "../../data/dataEmpresas";
import { rh } from "../../data/rh";
import './about.css'
import about from '../../assets/bg/about.jpg'
import hands from '../../assets/bg/hands.jpg'
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <main className="about">
            <Hero.Root
                img={about}
                textClassName="aboutHeroText"
            >
                <Hero.Title title={t('about.hero.title')} />
                <Hero.Description desc={t('about.hero.subTitle')} />
                <BtnScrool message="" href={"/about#mission"} color="white" />
            </Hero.Root>

            <div className="historia">
                <h1>{t('about.section1.title')}</h1>
                <p>{t('about.section1.text1')}</p>
                <p>{t('about.section1.text2')}</p>
                <p>{t('about.section1.text3')}</p>

                <img loading="lazy" src={hands} alt="grupo investe history" />
            </div>

            <Section.Root id="mission" img="" alt="Era Bom uma imagem de equipa toda">
                <Section.Title title={t('about.section2.title')} />
                <Section.Text desc={t('about.section2.text1')} />
                <Section.Text desc={t('about.section2.text2')} />
                <Section.Text desc={t('about.section2.text3')} />
            </Section.Root>

            <div className="goals" id="goals">
                <div className="textsGoals">
                    <h1>{t('about.section3.title')}</h1>
                    <p>{t('about.section3.text1')}</p>
                    <p>{t('about.section3.text2')}</p>
                </div>
                <div className="images">
                    {dataEmpresas.map((data, index) => (
                        <a href={data.link}>
                            <img loading="lazy" key={index} src={data.section1.img} alt={data.header.name} />
                        </a>
                    ))}
                </div>
            </div>

            <Quote
                person={t('about.section4.name')}
                position={t('about.section4.position')}
                quote={t('about.section4.text')}
            />

            <div id="team" className="team">
                <h1 className="text-center">{t('about.section5.title')}</h1>
                <div className="members">
                    {rh.map((data, index) => (
                        <figure key={index}>
                            <img src={data.link} alt={data.nome} />
                            <figcaption>
                                <p>{data.nome}</p>
                            </figcaption>
                        </figure>
                    ))}

                </div>
            </div>
        </main>
    )
}