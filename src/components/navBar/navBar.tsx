import { useState } from 'react'
import logo from '../../assets/logo/Logo-Horizontal-Preto.png'
import './navBar.css'
import { globalVar } from '../../data/consts'

export default function NavBar() {

  const [state, setState] = useState<boolean>(false)
  const [scrool, setScrool] = useState<boolean>(false)

  function handleScroll() {
    if (window.scrollY > 0) {
      setScrool(true)
    } else {
      setScrool(false)
    }
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <nav className={`navBar ${state ? "active" : null} ${scrool ? "scrolled" : null}`} >
      <img src={logo} alt="logo" />
      <div className='links' onMouseEnter={() => { setState(true) }} onMouseLeave={() => { setState(false) }}>
        <div>
          <a className="title" href="/about">Sobre</a>
          <span />
          <a className="subTitle" href="/about#mission">Missão</a>
          <a className="subTitle" href="/about#values">Valores</a>
          <a className="subTitle" href="/about#history">Historia</a>
          <a className="subTitle" href="/about#goals">Objetivos</a>
        </div>
        <div>
          <a className="title" href="/companies">Empresas</a>
          <span />
          <a className="subTitle" href="/invest2030">Invest2030</a>
          <a className="subTitle" href="/rootkey">ROOTKey</a>
          <a className="subTitle" href="/blendbyte">Blendbyte</a>
          <a className="subTitle" href="/esportzy">Esportzy</a>
          <a className="subTitle" href="/safevanguard">Safe Vanguard</a>
        </div>
        <div>
          <a className="title" href="/services">Oferta</a>
          <span />
          <a className="subTitle" href="/services">Consultoria</a>
          <a className="subTitle" href="/services">Maketing</a>
          <a className="subTitle" href="/services">Cibersegurança</a>
          <a className="subTitle" href="/services">Gamming</a>
        </div>
        <div></div>
        <div>
          <a className="title" href="/contacts">Contactos</a>
          <span />
          <a className="subTitle" href={`tel:${globalVar.numeroTlmLisboa}`}>{globalVar.numeroTlmLisboa}</a>
          <a className="subTitle" href={globalVar.sedeLisboaMaps}>{globalVar.sedeLisboa}</a>
          <a className="subTitle" href={globalVar.sedePortoMaps}>{globalVar.sedePorto}</a>
          <a className="subTitle" href={`mailto:${globalVar.email}`}>{globalVar.email}</a>
        </div>
      </div>
    </nav >
  )
}