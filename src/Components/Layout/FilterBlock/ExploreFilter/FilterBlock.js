import { HoverButton } from "../../../UI";
import { FilterDropDown } from "../../../UI/DropDowns/FilterDropDown/FIlterDropDown";
import './FilterBlock.css'



export const FilterBlock=()=>{



    return(
        <div className="filterable-bar">
            <div className="FilterForm">
                <FilterDropDown/>
                <FilterDropDown/>
                <FilterDropDown/>
                <FilterDropDown/>
                <FilterDropDown/>
                <HoverButton >Filter</HoverButton>
            </div>

        </div>
    );
}
