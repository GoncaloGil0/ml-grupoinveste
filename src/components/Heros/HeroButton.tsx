import { Link, LinkProps } from "react-router-dom";

interface HeroButtonProps extends LinkProps {
  desc: string;
}

export default function HeroButton(props: HeroButtonProps) {
  const { desc, ...linkProps } = props;

  return <Link {...linkProps}>{desc}</Link>;
}
