import { HTMLAttributes, ReactNode } from 'react';
import './section2.css'

import btm_left from '../../assets/logo/btm_left.svg'
import top_right from '../../assets/logo/top_right.svg'

interface PropsSection2Root extends HTMLAttributes<HTMLElement> {
    id: string;
    children?: ReactNode;
}

export default function Section2Root(props: PropsSection2Root) {
    const { children, ...sectionProps } = props;

    return (
        <div {...sectionProps} className='section2'>
            <img src={btm_left} alt="logo" />
            <img src={top_right} alt="logo" />
            {children}
        </div>
    );
}
