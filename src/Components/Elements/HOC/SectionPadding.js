import './HOC.css'


export const SectionPadding=(props)=>{
    var cname=props.margin?'sessionmargin section-padding':' section-padding';

    return(
        <section className={cname}>
            {props.children}
        </section>
    )
}