import './Grids.css'

export const Grids=({col,children})=>{


    return(
        <section className={'grid-'+col+'-columns'}>
            {children}
        </section>
    );
}