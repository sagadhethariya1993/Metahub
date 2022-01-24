import './HOC.css'


export const OverflowHidden=(props)=>{
    

    return(
        <section className="overflowx-hidden">
            {props.children}
        </section>
    )
}