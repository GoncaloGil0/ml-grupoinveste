import { HTMLAttributes } from 'react';

interface HeroTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function HeroTitle(props: HeroTitleProps) {
  const { title, ...headingProps } = props;

  return <h1 {...headingProps}>{title}</h1>;
}
