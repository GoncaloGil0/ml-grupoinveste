interface QuoteProps {
    quote: string,
    person: string,
    position:string,
}
export default function Quote(props:QuoteProps) {
    return (
        <div className="w-full bg-grupo-1 p-[5%] flex flex-col gap-10 items-end shadow">
            <h4 className="text-grupo-2 text-right">"{props.quote}"</h4>
            <h6 className="text-grupo-2 text-right flex gap-2">{props.person} - <h6 className="italic">{props.position}</h6></h6>
        </div>
    )
}