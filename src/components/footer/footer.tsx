import { FaLinkedin } from "react-icons/fa";
import './footer.css'
import { globalVar } from '../../data/consts'
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Footer() {
  const { t, i18n } = useTranslation();

  function languageHandler(language: string) {
		localStorage.setItem('language', language);
		i18n.changeLanguage(language)
	}

	useEffect(() => {
		if (localStorage.getItem('language') != null) {
			i18n.changeLanguage(localStorage.getItem('language')?.toString());
		}
	}, [i18n])

  return (
    <footer className="footer shadow-[0_35px_50px_10px_rgba(0,0,0,0.3)]">
      <div className='line'>
        <div className='logo'>
          <a href="/"><img src={"https://media.grupoinveste.pt/emp/grupo/horizontal_black.png"} alt="" /></a>
        </div>
        <div>
          <h6 >{t('Footer.pages')}</h6>
          <a href="/about#mission">{t('Footer.mission')}</a>
          <a href="/about#values">{t('Footer.goals')}</a>
          <a href="/about#history">{t('Footer.team')}</a>
          <h6 >{t('Footer.Language')}</h6>
          <select id="language" name="language" onChange={(event) => { languageHandler(event.target.value) }}>
            <option value="" >Idioma</option>
            <option value="en">English</option>
            <option value="pt">Português (PT)</option>
          </select>
        </div>
        <div>
          <h6 >{t('Footer.companies')}</h6>
          <a href="/invest2030">Invest2030</a>
          <a href="/rootkey">ROOTKey</a>
          <a href="/safevanguard">Safe Vanguard</a>
          <a href="/blendbyte">Blendbyte</a>
          <a href="/esportzy">Esportzy</a>
        </div>
        <div>
          <h6 >{t('Footer.contacts')}</h6>
          <a href={`tel:${globalVar.numeroTlmLisboa}`}>{globalVar.numeroTlmLisboa}</a>
          <a href={globalVar.sedeLisboaMaps}>{globalVar.sedeLisboa}</a>
          <a href={globalVar.sedePortoMaps}>{globalVar.sedePorto}</a>
          <a href={`mailto:${globalVar.email}`}>{globalVar.email}</a>
          <h6 className="redes" >{t('Footer.social')}</h6>
          <div className="social">
            <a target="_blank" href="https://www.linkedin.com/company/grupoinveste"><FaLinkedin /></a>
          </div>
    
        </div>
        <div>
          
          
        </div>
      </div>
      <div className='flex'>
        <p>{t('Footer.rights')}</p>
        <a href='/'>{t('Footer.docsLegais')}</a>
      </div>
    </footer>
  )
}