import { Avatar26 } from '../Avatars';

import './MetaInfo.css'


export const ItemMeta =({title})=>{


    return(
        <div className="item-meta">
            <Avatar26/>
            @{title}
        </div>
    );
}