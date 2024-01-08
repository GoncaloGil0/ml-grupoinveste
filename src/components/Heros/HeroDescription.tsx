import { HTMLAttributes } from 'react';

interface HeroDescriptionProps extends HTMLAttributes<HTMLHeadingElement> {
  desc: string;
}

export default function HeroDescription(props: HeroDescriptionProps) {
  const { desc, ...headingProps } = props;

  return <h5 className="font-medium text-[30px] text-grupo-2"  {...headingProps}>{desc}</h5>;
}
