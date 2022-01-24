import {FilterDropDown} from '../../UI/DropDowns/FilterDropDown/FIlterDropDown'

export const NoBgRightFilter=()=>{



    return(
        <div className="collectors-filter">
            <div className="flex-right">
                <FilterDropDown/>
                <FilterDropDown/>
            </div>
        </div>
    );
}