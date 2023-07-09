import { Link } from "react-router-dom"

interface HeroButtonProps {
  href: string,
  desc: string
}
export default function HeroButton(props: HeroButtonProps) {
  return (<Link to={props.href}>{props.desc}</Link>)
}