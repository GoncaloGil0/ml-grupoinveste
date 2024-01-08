import { HTMLAttributes } from 'react';

interface HeroTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function HeroTitle(props: HeroTitleProps) {
  const { title, ...headingProps } = props;

  return <h1 className="font-bold text-[60px] text-grupo-2" {...headingProps}>{title}</h1>;
}
