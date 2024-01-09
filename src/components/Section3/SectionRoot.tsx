import { HTMLAttributes, ReactNode } from 'react';
import './section3.css'

interface PropsSection extends HTMLAttributes<HTMLElement> {
    id: string;
    children?: ReactNode;
    img: string
    alt: string
}

export default function Section3Root(props: PropsSection) {
    const { id, alt, img, children, ...sectionProps } = props;

    return (
        <section id={id} {...sectionProps} className='section3Root'>

            <div className='texts'>
                {children}
            </div>
            <div className='img'>
                <span />
                <span />
                <img src={img} alt={alt || props.id + "image"} />
            </div>
        </section>
    );
}
