import './Link.css'


export const Link=({children,onClick})=>{
    return(
        <a onClick={()=>{onClick()}}>{children}</a>
    );
}