import './footer.css'
import logo from '../../assets/logo/Logo-Horizontal-Preto.png'
import { globalVar } from '../../data/consts'

export default function Footer() {
  return (
    <footer className="footer shadow-[0_35px_50px_10px_rgba(0,0,0,0.3)]">
      <div className='line'> 
        <div>
          <a href="/"><img src={logo} alt="" /></a>
        </div>
        <div>
          <h6 className="title" >Paginas</h6>
          <a className="subTitle" href="/about#mission">Missão</a>
          <a className="subTitle" href="/about#values">Valores</a>
          <a className="subTitle" href="/about#history">Historia</a>
          <a className="subTitle" href="/about#goals">Objetivos</a>
        </div>
        <div>
          <h6 className="title" >Empresas</h6>
          <a className="subTitle" href="/invest2030">Invest2030</a>
          <a className="subTitle" href="/rootkey">ROOTKey</a>
          <a className="subTitle" href="/blendbyte">Blendbyte</a>
          <a className="subTitle" href="/esportzy">Esportzy</a>
          <a className="subTitle" href="/safevanguard">Safe Vanguard</a>
        </div>
        <div>
          <h6 className="title" >Contactos</h6>
          <a className="subTitle" href={`tel:${globalVar.numeroTlmLisboa}`}>{globalVar.numeroTlmLisboa}</a>
          <a className="subTitle" href={globalVar.sedeLisboaMaps}>{globalVar.sedeLisboa}</a>
          <a className="subTitle" href={globalVar.sedePortoMaps}>{globalVar.sedePorto}</a>
          <a className="subTitle" href={`mailto:${globalVar.email}`}>{globalVar.email}</a>
        </div>
      </div>
      <div className='flex'>
        <p>Direitos reservados Grupo Investe | 2024</p>
        <a>Documentos Legais</a>
      </div>
    </footer>
  )
}