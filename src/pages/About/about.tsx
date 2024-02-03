import { Hero } from "../../components/Heros";
import Quote from "../../components/Quote/quote";
import { Section } from "../../components/Section";
import BtnScrool from "../../components/animation/BtnScrool/btnScrool";
import { dataEmpresas } from "../../data/dataEmpresas";
import { rh } from "../../data/rh";
import './about.css'
import about from '../../assets/bg/about.jpg'
import hands from '../../assets/bg/hands.jpg'

export default function About() {
    return (
        <main className="about">
            <Hero.Root
                img={about}
                textClassName="aboutHeroText"
            >
                <Hero.Title title="A nossa historia" />
                <Hero.Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. " />
                <BtnScrool message="" href={"/about#mission"} color="white" />
            </Hero.Root>

            <div className="historia">
                <h1>A nossa historia</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>

                <img loading="lazy" src={hands} alt="grupo investe history" />
            </div>

            <Section.Root id="mission" img="" alt="Era Bom uma imagem de equipa toda">
                <Section.Title title="Missão" />
                <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
                <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
                <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
            </Section.Root>

            <div className="goals" id="goals">
                <div className="textsGoals">
                    <h1>Objetivos</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </div>
                <div className="images">
                    {dataEmpresas.map((data, index) => (
                        <a href={data.link}>
                        <img  loading="lazy" key={index} src={data.section1.img} alt={data.header.name} />
                        </a>
                    ))}
                </div>
            </div>

            <Quote
                person="Jorge Delgado"
                position="CEO & Managing Partner"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla."
            />

            <div id="team" className="team">
                <h1 className="text-center">A nossa equipa</h1>
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