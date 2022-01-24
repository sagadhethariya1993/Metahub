import './Grids.css'

export const Grids=(props)=>{


    return(
        <section className={'grid-'+props.col+'-columns'}>
            {props.children}
        </section>
    );
}