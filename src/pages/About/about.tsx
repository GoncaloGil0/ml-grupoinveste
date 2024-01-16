import { Hero } from "../../components/Heros";
import Quote from "../../components/Quote/quote";
import { Section } from "../../components/Section";
import BtnScrool from "../../components/animation/BtnScrool/btnScrool";
import { dataEmpresas } from "../../data/dataEmpresas";
import './about.css'

export default function About() {
    const membersArray = Array.from({ length: 24 }, (_, index) => ({
        id: index + 1,
        name: "Jorge Delgado",
        imgSrc: `image_${index + 1}.jpg`,
        position: `CEO & Founder`,
    }));

    return (
        <main className="about">
            <Hero.Root
                img="https://wallpapercrafter.com/desktop/15053-bridge-night-city-city-lights-25-de-abril-bridge-lisbon-almada-4k.jpg"
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

                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0c%2Fc5%2Fbb%2F0cc5bbf9980c4bb319994face7393b4f.jpg&f=1&nofb=1&ipt=0342cc2831417f3138ffa7e4c21a5f9d0f8715fb74bdb08422e21d2481eff41c&ipo=images" alt="" />
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
                        <img key={index} src={data.section1.img} alt={data.header.name} />
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
                    {membersArray.map((data, index) => (
                        <figure key={index}>
                            <img src={data.imgSrc} alt="person photo" />
                            <figcaption>
                                <p>{data.name}</p>
                                <p className="italic">{data.position}</p>
                            </figcaption>
                        </figure>
                    ))}

                </div>
            </div>
        </main>
    )
}