import { HTMLAttributes, ReactNode } from "react";
import './styles.css'
interface HeroRootProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  img?: string
  textClassName?: string
}
export default function HeroRoot(props: HeroRootProps) {
  return (
    <header className={`w-screen h-[100vh] px-[5%] flex items-center justify-start relative overflow-hidden`} {...props}>
      <img src={props.img} alt="hero" />
      <div className={props.textClassName || "w-[50%] flex flex-col gap-2 z-10"} >
        {props.children}
      </div>
    </header>
  )
}