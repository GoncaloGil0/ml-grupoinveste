import { useTranslation } from "react-i18next";
import { Hero } from "../../components/Heros";
import { empresaDataInterface } from "../Empresa/empresa";
import './empresaHome.css'
import hero from '../../assets/bg/empreas.avif'

export interface EmpresaHomeProps {
    data: empresaDataInterface[]
}

export default function EmpresaHome(props: EmpresaHomeProps) {
    const { t } = useTranslation();

    return (
        <main className='empresaHome'>
            <Hero.Root
                img={hero}
                textClassName="companiesText"
            >
                <Hero.Title title="Conheça as nossas empresas" />

                <div className="empresaHomeGrid ">
                    {
                        props.data.map((data, index) => (
                            <a href={data.link} key={index} className="divEmpresa">
                                <h5>{t(data.header.name)}<img src={data.icon} alt={`icon-${data.header.name}`} /></h5>
                                <p>{t(data.header.slogan)}</p>
                                <span>
                                    {data.header.tags.map((tag, tagIndex) => (
                                        <p key={tagIndex}>{t(tag)}</p>
                                    ))}
                                </span>
                            </a>
                        ))
                    }
                </div>
            </Hero.Root>
        </main>
    );
}
