import { BiChevronRight } from "react-icons/bi";
import { Link, LinkProps } from "react-router-dom";

interface Section2BtnProps extends LinkProps {
    desc: string;
}

export default function Section2Btn(props: Section2BtnProps) {
    const { desc, ...linkProps } = props;

    return <Link
        {...linkProps}
        className="flex items-center gap-2 justify-center hover:gap-5 transition-all duration-500 hover:text-grupo-7 font-bold"
    >
        {desc}<BiChevronRight />
    </Link>;
}
