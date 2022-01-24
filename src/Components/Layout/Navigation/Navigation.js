import { useState ,useEffect} from "react";
import { DeskTopBar } from "./Desk/DeskTopBar";
import { MobTopBar } from "./Mob/MobTopBar";
import {HeaderItemMeta} from '../../Elements/UserInfo/HeaderItemMeta'
import './Navigation.css'
import { DeskBottomBar } from "./Desk/DeskBottomBar";


export const Navigation=({changeMode})=>{
    const [nav, setNav] = useState('desk');
    const [screenWidth, setScreenWidth] = useState(window.outerWidth);
    const resize=()=> {
        setScreenWidth(window.outerWidth);
        
    }
    
    useEffect(() => {
        window.addEventListener("resize", resize.bind(this));
        resize();
    }, []);
    useEffect(()=>{

        if( screenWidth>768 ){
            setNav('desk');
        }else{
            setNav('mob');
        }
    },[screenWidth])
    
    return (
        <header className="site-header">
            <div className="topbar padding-top-bottom border-bottom">
                <div className="topbar-wrapper headercontainer">
                    
                    {nav==='desk'?<DeskTopBar />:<MobTopBar/>}
                    <HeaderItemMeta  changeMode={()=>changeMode()}/>
                    
                </div>
            </div>

            {nav==='desk'?<DeskBottomBar/>:null}
        </header>
            
    );
}