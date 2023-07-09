
interface HeroDescriptionProps {
  desc: string
}
export default function HeroDescription(props: HeroDescriptionProps) {
  return (<h5>{props.desc}</h5>)
}