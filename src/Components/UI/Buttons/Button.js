import './Buttons.css'


export const Button=({children,onClick,className=""})=>{



    return(
        <button className={"btn btn-normal "+className} onClick={()=>{onClick()}}>
            {children}
        </button>
    );
}