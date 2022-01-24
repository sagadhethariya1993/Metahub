import {Ux} from '../../../Elements/HOC'
import { Logo } from '../../../Elements/Logos/Logo';
import { SearchBox } from '../../../UI/Forms/SearchBar/SearchBox';
import { ActivityButtons } from '../ActivityButtons';
import './DeskTopBar.css'

export const DeskTopBar=()=>{


    return (
    <Ux>
        <Logo/>
        <SearchBox/>
        <div className="collection-box">
            <a className="btn btn-normal btn-dark create-collection waves-effect waves-button waves-float waves-light">Create</a>
            <div className="collection-title"><a>My Collection<span className="count colored">12</span></a></div>
        </div>
        <ActivityButtons/>
    </Ux>
    );
}