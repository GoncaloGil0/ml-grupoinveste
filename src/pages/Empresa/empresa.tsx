import { BiLinkExternal } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Hero } from '../../components/Heros/index.tsx'
import { Section_2 } from '../../components/Section2/index.tsx'
import { Section3 } from '../../components/Section3/index.tsx'
import './empresa.css'

export interface empresaDataInterface {
    color: string;
    link: string;
    header: {
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
    return (
        <main className='empresa'>
            <Hero.Root
                className='empresaHero'
                img="https://www.invest2030.pt/images/cover1.jpg"
            >
                <div className='heroComponent'>
                    <div className='tags'>
                        {props.header.tags.map((data, index) => (

                            <p key={index} style={{ borderColor: `${props.color}` }}>{data}</p>
                        ))}
                    </div>
                    <a target="_blank" href="https://invest2030.pt"><h2>{props.header.name} <BiLinkExternal /></h2></a>
                    <h6>Potenciar o desenvolvimento, crescimento e sustentabilidade das empresas portuguesas.</h6>
                </div>
            </Hero.Root>

            <Section3.Root id='logo' alt="logo" img='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finvest2030.pt%2Fassets%2Fimages%2Flogoi22030.png&f=1&nofb=1&ipt=66375bf4af7b0bd0df84233caf194c24d6445909225f9dfc3150e69083933a09&ipo=images'>
                <Section3.Title title="Quem somos?" />
                <Section3.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
                <Section3.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
                <Section3.Title title="Missão" />
                <Section3.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
                <Section3.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
            </Section3.Root>

            <div className='oferta'>
                <div className='col'>
                    <h5 style={{ color: "rgba(0, 128, 0, 1)" }}> Consultoria Estratégica <MdKeyboardArrowDown /></h5>
                    <p>Start-up</p>
                    <p>Digitalização de empresas</p>
                    <p>Business Intelligence</p>
                    <p>Fusões e Aquisições</p>
                    <p>Market Analysis</p>
                    <p>Business Valuation</p>
                    <p>Acquisitons (buy-side)</p>
                    <p>Sales (sell-side)</p>
                </div>
                <div className='col'>
                    <h5 style={{ color: "rgba(0, 128, 0, 1)" }}>Consultoria Financeira <MdKeyboardArrowDown /></h5>
                    <p>Business Plan</p>
                    <p>Estudos de Viabilidade Económica e Financeira</p>
                    <p>Avaliação de Empresas</p>
                </div>
                <div className='col'>
                    <h5 style={{ color: "rgba(0, 128, 0, 1)" }}>Consultoria de Risco <MdKeyboardArrowDown /></h5>
                    <p>Risco Estratégico</p>
                    <p>Due Deligence</p>
                </div>
                <div className='col'>
                    <h5 style={{ color: "rgba(0, 128, 0, 1)" }}>Consultoria de Investimento <MdKeyboardArrowDown /></h5>
                    <p>Risco Estratégico</p>
                    <p>Due Deligence</p>
                </div>
                <div className='col'>
                    <h5 style={{ color: "rgba(0, 128, 0, 1)" }}>Maket Resource <MdKeyboardArrowDown /></h5>
                    <p>Risco Estratégico</p>
                    <p>Due Deligence</p>
                </div>
                <div className='col'>
                    <h5 style={{ color: "rgba(0, 128, 0, 1)" }}>Consultoria as a Service <MdKeyboardArrowDown /></h5>
                    <p>Risco Estratégico</p>
                    <p>Due Deligence</p>
                </div>
            </div>


            <Section_2.Root id="click" >
                <Section_2.Title title="Envia-nos uma mensagem!" />
                <Section_2.Button2 to={"https://www.invest2030.pt/meeting"} desc="Clica aqui!" />
            </Section_2.Root>
        </main>
    )
}