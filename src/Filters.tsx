import { FILTER_BUTTONS } from "./consts"
import { FilterValue } from "./types"

interface Props{
    filterSelect:FilterValue
    onFilterChange :(filter:FilterValue) =>void
}

export const Filters: React.FC<Props> = ({filterSelect , onFilterChange})=>{
    return(
         <ul className="filters">
            {
                Object.entries(FILTER_BUTTONS).map(([key, {href,literal}])=>{
                    const isSelected = key ==filterSelect
                    const className = isSelected ? 'selected': ''
                    return(
                        <li key={key}>
                            <a 
                                href={href}
                                className={className}
                                onClick={(event) =>{
                                    event.preventDefault()
                                    onFilterChange(key as FilterValue)
                                }}
                            > 
                            {literal}
                            </a>
                        </li>
                    )
                })
            }
         </ul>
    )
}