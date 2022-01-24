


export const HoverButton=({children,onClick,className=""})=>{


    return(
        <div onProgress={()=>onClick()} className={"more-section flex-center "+className}>
            <a className="btn btn-normal btn-dark waves-effect waves-button waves-float waves-light">
                {children}
            </a>
        </div>
    );
}