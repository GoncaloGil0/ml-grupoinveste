import { MdKeyboardArrowRight } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { Hero } from "../../components/Heros";
import { Section } from "../../components/Section";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './home.css'
import BtnScrool from "../../components/animation/BtnScrool/btnScrool";
import { dataEmpresas } from "../../data/dataEmpresas";
import { useTranslation } from "react-i18next";
import { clientes } from "../../data/clientes";

export default function Home() {
  const { t } = useTranslation();

  const multipleRowsSettings = {
    dots: false,
    className: "multipleRows",
    infinite: true,
    speed: 9000,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    rows: 1,
  };

  const heroSettings = {
    dots: false,
    className: "heroSlide",
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const sliderEmpresasGrupo = {
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

  return (
    <main className="home">

      <Hero.Root img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fblack-and-white-architecture-perspective-building-skyscraper-line-facade-monochrome-tower-block-buildings-windows-symmetry-headquarters-metropolis-low-angle-shot-monochrome-photography-window-covering-954067.jpg&f=1&nofb=1&ipt=2b026c6aa1177debf1c42ab4d8ffa463be628bb3a934e1dd71d88cef58d55d2c&ipo=images">
        <Hero.Title title="Grupo Investe" />
        <Hero.Description desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. " />
        <BtnScrool message="See more..." href={"/#about"} color="white" />
        <div className="btnEmpresas">
          <span />
          <span />
          <span />
          <span />
          <span />
          <div className="wrap">
            <Slider  {...heroSettings} rtl={true} arrows={false}>
              {dataEmpresas.map((data, index) => (
                <div key={index}>
                  <div className="logo w-[80%] ml-[10%]">
                    <a href={data.link}>
                      <img
                        className="max-w-full h-full items-center justify-center"
                        src={data.logo_white}
                        alt={data.header.name}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Hero.Root>

      <Section.Root id="about" img="" alt="Era Bom uma imagem de equipa">
        <Section.Title title="Sobre" />
        <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
        <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
        <Section.Text desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " />
        <Section.Button icone={MdKeyboardArrowRight} className="flex items-center justify-start gap-1 hover:gap-3 hover:text-xl font-bold rounded-2xl px-2 py-5 transition-all duration-500" to={"/about"} desc="Saber mais" />
      </Section.Root>

      <div className="trusted">
        <div className="text">
          <h1>Trusted by</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem non massa varius, at interdum arcu condimentum.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
          <p>Sed eleifend lorem non massa varius, at interdum arcu condimentum. Nulla facilisi. Cras eget massa vel ligula tincidunt fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
        </div>
        <div className="slidesDiv">
          <Slider  {...multipleRowsSettings} rtl={true} speed={9000}>
            {clientes.slice(0, 10).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={false} speed={10000}>
            {clientes.slice(10, 20).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={true} speed={10500}>
            {clientes.slice(20, 30).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    className="w-max-w-full-h-[50%] px-1"
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={false} speed={10400}>
            {clientes.slice(30, 40).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    className="w-max-w-full-h-[50%] px-1"
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={true} speed={9200}>
            {clientes.slice(40).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    className="w-max-w-full-h-[50%] px-1"
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Slider className='slide' {...sliderEmpresasGrupo}>
        {dataEmpresas.map((data, index) => (
          <div key={index} >
            <a href={data.link}>
              <div className={`slideDivs`}>
                <img src={data.logo_white} alt={data.header.name} />
                <h4>{t(data.header.name)}</h4>
                <p>{t(data.header.slogan)}</p>
                <a target="_blank" href={data.header.website}>{t('Website')}<BiChevronRight /></a>
              </div>
            </a>
          </div>
        ))}
      </Slider>

    </main >
  )
}