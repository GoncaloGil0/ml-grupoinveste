import { HTMLAttributes, ReactNode } from 'react';
import './section.css'

interface PropsSection extends HTMLAttributes<HTMLElement> {
    id: string;
    children?: ReactNode;
    img: string
    alt: string
}

export default function SectionRoot(props: PropsSection) {
    const { id, alt, img, children, ...sectionProps } = props;

    return (
        <section id={id} {...sectionProps} className='sectionRoot'>
            <div className='img'>
                <img src={img} alt={alt || props.id + "image"} />
            </div>
            <div className='texts'>
                {children}
            </div>
        </section>
    );
}
