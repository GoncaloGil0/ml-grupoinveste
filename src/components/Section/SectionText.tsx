import { HTMLAttributes } from 'react';

interface SectionTextProps extends HTMLAttributes<HTMLParagraphElement> {
  desc: string;
}

export default function SectionText(props: SectionTextProps) {
  const { desc, ...paragraphProps } = props;

  return <p {...paragraphProps}>{desc}</p>;
}
