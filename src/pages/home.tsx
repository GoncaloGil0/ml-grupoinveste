import { Hero } from "../components/Heros";

export default function Home() {
  return (
    <div className="h-auto w-screen">
      
      <Hero.Root>
        <Hero.Title title="Grupo Investe"/>
        <Hero.Description desc="Descrição do Hero 1"/>
        <Hero.Button href="#" desc="Button"/>
      </Hero.Root>
      
    </div>
  )
}