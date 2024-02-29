import { MdKeyboardArrowRight } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { Hero } from "../../components/Heros";
import { Section } from "../../components/Section";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home from '../../assets/bg/home.jpg'
import './home.css'
import BtnScrool from "../../components/animation/BtnScrool/btnScrool";
import { dataEmpresas } from "../../data/dataEmpresas";
import { useTranslation } from "react-i18next";
import { clientes } from "../../data/clientes";
import sec1 from '../../assets/bg/aboutSec1.jpg'

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

      <Hero.Root img={home}>
        <Hero.Title title={t('home.hero.title')} />
        <Hero.Description desc={t('home.hero.subTitle')}  />
        <BtnScrool message={t('home.hero.btn')} href={"/#about"} color="white" />
        <div className="btnEmpresas">
          <span />
          <span />
          <span />
          <span />
          <span />
          <div className="wrap">
            <Slider  {...heroSettings} rtl={false} arrows={false}>
              {dataEmpresas.map((data, index) => (
                <div key={index}>
                  <div className="logo w-[80%] ml-[10%]">
                    <a href={data.link}>
                      <img
                        className="max-w-full h-full items-center justify-center"
                        src={data.logo_vertical ? data.logo_vertical : data.logo_white}
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

      <Section.Root id="about" img={sec1} alt="Who is Grupo Investe">
        <Section.Title title={t('home.section2.title')} />
        <Section.Text desc={t('home.section2.text1')} />
        <Section.Text desc={t('home.section2.text2')} />
        <Section.Button icone={MdKeyboardArrowRight} className="flex items-center justify-start gap-1 hover:gap-3 hover:text-xl font-bold rounded-2xl px-2 py-5 transition-all duration-500" to={"/about"} desc={t('home.section2.btn')} />
      </Section.Root>

      <div className="trusted">
        <div className="text">
          <h1>{t('home.section3.title')}</h1>
          <p>{t('home.section3.text1')}</p>
          <p>{t('home.section3.text2')}</p>
        </div>
        <div className="slidesDiv">
          <Slider  {...multipleRowsSettings} rtl={true}>
            {clientes.slice(0, 10).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    loading="lazy"
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={false}>
            {clientes.slice(10, 20).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    loading="lazy"
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={true}>
            {clientes.slice(20, 30).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    loading="lazy"
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={false}>
            {clientes.slice(30, 40).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    loading="lazy"
                    src={data}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...multipleRowsSettings} rtl={true}>
            {clientes.slice(40).map((data, index) => (
              <div key={index}>
                <div className="logo">
                  <img
                    loading="lazy"
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
                <a target="_blank" rel="noreferrer" href={data.header.website}>{t('Website')}<BiChevronRight /></a>
              </div>
            </a>
          </div>
        ))}
      </Slider>

    </main >
  )
}