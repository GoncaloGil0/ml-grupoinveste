import { HTMLAttributes } from 'react';

interface HeroDescriptionProps extends HTMLAttributes<HTMLHeadingElement> {
  desc: string;
}

export default function HeroDescription(props: HeroDescriptionProps) {
  const { desc, ...headingProps } = props;

  return <h5 {...headingProps}>{desc}</h5>;
}
