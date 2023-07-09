
interface HeroTitleProps {
  title: string
}
export default function HeroTitle(props: HeroTitleProps) {
  return (<h1>{props.title}</h1>)
}