


export const GradientButton=({children,onClick,background,className=""})=>{



    return(

        <button className={"slide-button gradient-border_"+ background+"-bg "+ className}  
        onClick={()=>{onClick()}}>
            <a className="btn btn-normal waves-effect waves-button waves-float waves-light ">
                {children}
            </a>
        </button>
        
    );
}