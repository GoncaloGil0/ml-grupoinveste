import { Hero } from "../components/Heros";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div className="h-auto w-screen">
      <NavBar />
      <Hero.Root>
        <Hero.Title title="Grupo Investe"/>
        <Hero.Description desc="Descrição do Hero 1"/>
        <Hero.Button href="#" desc="Button"/>
      </Hero.Root>
      <Footer />
    </div>
  )
}