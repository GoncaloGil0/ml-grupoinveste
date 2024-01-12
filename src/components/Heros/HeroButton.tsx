import { IconType } from "react-icons";
import { Link, LinkProps } from "react-router-dom";

interface HeroButtonProps extends LinkProps {
  desc: string;
  icone?: IconType;
}

export default function HeroButton(props: HeroButtonProps) {
  const { desc, ...linkProps } = props;

  return <Link {...linkProps}>{desc}{props.icone ? <props.icone/> : null}</Link>;
}
