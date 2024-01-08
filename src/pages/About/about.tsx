import { Hero } from "../../components/Heros";
import Quote from "../../components/Quote/quote";
import { Section } from "../../components/Section";
import BtnScrool from "../../components/animation/BtnScrool/btnScrool";
import './about.css'

export default function About() {
    const membersArray = Array.from({ length: 24 }, (_, index) => ({
        id: index + 1,
        name: "Jorge Delgado",
        imgSrc: `image_${index + 1}.jpg`, // Substitua pelo caminho correto de suas imagens
        position: `CEO & Founder`, // Substitua pelo caminho correto de suas imagens
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </div>
                <div className="images">
                    <img src="https://media.notcybersec.com/website/Company/partners/blendbyte.svg" alt="" />
                    <img src="https://media.notcybersec.com/website/Company/partners/blendbyte.svg" alt="" />
                    <img src="https://media.notcybersec.com/website/Company/partners/blendbyte.svg" alt="" />
                    <img src="https://media.notcybersec.com/website/Company/partners/blendbyte.svg" alt="" />
                    <img src="https://media.notcybersec.com/website/Company/partners/blendbyte.svg" alt="" />
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