
export default function NavBar() {
    return (
      <nav className="h-16 w-full px-20 py-4 sticky top-0 left-0 bg-backgroud-1 flex gap-10 items-end justify-start">
        <img src="/" alt="" className="h-full w-56"/>
        <a className="text-base font-bold" href="#">Sobre</a>
        <a className="text-base font-bold" href="#">Missão</a>
        <a className="text-base font-bold" href="#">Grupo</a>
        <a className="text-base font-bold" href="#">Contactos</a>
      </nav>
    )
  }