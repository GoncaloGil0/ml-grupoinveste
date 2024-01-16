import { useTranslation } from "react-i18next";
import { Hero } from "../../components/Heros";
import { empresaDataInterface } from "./empresa";
import './empresaHome.css'

export interface EmpresaHomeProps {
    data: empresaDataInterface[]
}

export default function EmpresaHome(props: EmpresaHomeProps) {
    const { t } = useTranslation();

    return (
        <main className='empresaHome'>
            <Hero.Root
                img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
