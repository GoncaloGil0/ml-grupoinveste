import { ReactNode } from "react";

interface HeroRootProps {
  children?: ReactNode;
}
export default function HeroRoot(props : HeroRootProps) {
    return (
      <header className="w-screen h-[80vh] px-20 flex items-center justify-start relative overflow-hidden">
        <img src="https://images6.alphacoders.com/480/480310.jpg" alt="" className="absolute top-0 right-0 w-[100%] h-[100%]"/>
        <div className="w-[50%] flex flex-col gap-2 z-10">
        {props.children}
        </div>
      </header>
    )
  }