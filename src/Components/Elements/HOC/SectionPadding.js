import './HOC.css'


export const SectionPadding=(props)=>{
    

    return(
        <section className={props.margin?'sessionmargin '+" section-padding":' section-padding'}>
            {props.children}
        </section>
    )
}