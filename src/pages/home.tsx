import { BiChevronRight } from "react-icons/bi"; 
import { Hero } from "../components/Heros";
import { Section } from "../components/Section";
import { Section_2 } from "../components/Section2";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './home.css'
import { Link } from "react-router-dom";

export default function Home() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [];
  for (let i = 1; i <= 5; i++) {
    slides.push(
      <div key={i} >
        <div className={`slideDivs shadow-lg`}>
          <img src={'https://media.notcybersec.com/Logos_NCS/280x60_branco.png'} alt="" />
          <h6>Securing Data Validity And Authenticity</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla.</p>
          <Link to="/">Get to know more <BiChevronRight /></Link>
        </div>
      </div>
    );
  }
  return (
    <div className="home h-auto w-screen flex flex-col gap-20">

      <Hero.Root img="https://www.jonesday.com/-/media/images/publications/2020/10/the-future-direction-of-corporate-criminal-responsibility-in-australia/articleimage/the_future_direction_of_corporate_criminal_respon.jpg?h=800&w=1600&la=en&hash=3D16C5EC34DE4327F1040F12D9C7E0D7">
        <Hero.Title title="Grupo Investe" className="font-bold text-[60px]" />
        <Hero.Description desc="Impulsionando o empreendedorismo portugues" className="font-medium text-[30px]" />
      </Hero.Root>

      <Section.Root id="about" img="" alt="Era Bom uma imagem de equipa">
        <Section.Title title="Sobre" />
        <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
        <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
        <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
      </Section.Root>

      <Section_2.Root id="click" >
        <Hero.Title title="Deseja falar connosco?" />
        <Hero.Button to={"/"} desc="Deseja falar connosco?" />
      </Section_2.Root>

      <Slider className={'slide '} {...sliderSettings}>
        {slides}
      </Slider>
    </div>
  )
}