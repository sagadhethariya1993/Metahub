import './HOC.css'

export const Container =(props)=>{
    return(
        <div className="container">
            {props.children}
        </div>
    );
}