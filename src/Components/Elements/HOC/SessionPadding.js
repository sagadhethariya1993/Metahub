import './HOC.css'


export const SessionPadding=(props)=>{
    

    return(
        <section className={props.margin?'sessionmargin '+" sessionpadding":' sessionpadding'}>
            {props.children}
        </section>
    )
}