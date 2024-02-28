import { BiLinkExternal } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Hero } from '../../components/Heros/index.tsx'
import { Section2 } from '../../components/Section2/index.tsx'
import { Section3 } from '../../components/Section3/index.tsx'
import './empresa.css'
import { useTranslation } from "react-i18next";

export interface empresaDataInterface {
    color: string;
    link: string;
    icon: string;
    logo_white : string;
    logo_vertical? : string;
    header: {
        website: string;
        banner: string;
        tags: string[];
        name: string;
        slogan: string;
    };
    section1: {
        img: string;
        title_1: string;
        text_1: string;
        text_2: string;
        title_2: string;
        text_3: string;
        text_4: string;
    };
    section2: {
        title: string;
        text: string[];
    }[];
    section3: {
        title: string;
        text: string;
        link: string;
    };

}
export default function Empresa(props: empresaDataInterface) {
    const { t } = useTranslation();

    return (
        <main className='empresa'>
            <Hero.Root
                className='empresaHero'
                img={props.header.banner}
            >
                <div className='heroComponent'>
                    <div className='tags'>
                        {props.header.tags.map((data, index) => (

                            <p key={index} style={{ borderColor: `${props.color}` }}>{t(data)}</p>
                        ))}
                    </div>
                    <a target="_blank"  rel="noreferrer" href={props.header.website}><h2>{t(props.header.name)} <BiLinkExternal /></h2></a>
                    <h6>{t(props.header.slogan)}</h6>
                </div>
            </Hero.Root>

            <Section3.Root id='logo' alt="logo" img={props.section1.img}>
                <Section3.Title title={t(props.section1.title_1)} />
                <Section3.Text desc={t(props.section1.text_1)} />
                <Section3.Text desc={t(props.section1.text_2)} />
                <Section3.Title title={t(props.section1.title_2)} />
                <Section3.Text desc={t(props.section1.text_3)} />
                <Section3.Text desc={t(props.section1.text_4)} />
            </Section3.Root>

            <div className='oferta' >
                <div className="bg" style={{backgroundColor: `${props.color}`}}/>
                {props.section2.map((data, index) => (
                    <div className='col' key={index}>
                        <h5 style={{ color: `${props.color}` }}> {t(data.title)} <MdKeyboardArrowDown /></h5>
                        {data.text.map((data, index) => (
                            <p key={index}>{t(data)}</p>
                        ))}
                    </div>
                ))}
            </div>

            <Section2.Root id="click" >
                <Section2.Title title={t(props.section3.title)} />
                <Section2.Button2 target="_blank" style={{color: `${props.color}`}} to={props.section3.link} desc={t(props.section3.text)} />
            </Section2.Root>
        </main>
    )
}