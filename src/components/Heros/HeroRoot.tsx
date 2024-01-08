import { HTMLAttributes, ReactNode } from "react";
interface HeroRootProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  img?: string
  textClassName?: string
}
export default function HeroRoot(props: HeroRootProps) {
  return (
    <header className="w-screen h-[100vh] px-[5%] flex items-center justify-start relative overflow-hidden" {...props}>
      <img src={props.img} alt="" className="absolute top-0 right-0 w-[100%] h-[100%] z-0 brightness-50" />
      <div className={props.textClassName || "w-[50%] flex flex-col gap-2 z-10"} >
        {props.children}
      </div>
    </header>
  )
}