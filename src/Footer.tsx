import { Filters } from "./Filters"
import { FilterValue } from "./types"

interface Props {
    activeCount :number
    onClearCompleted: () => void
    completedCount : number
    filterSelectted : FilterValue
    handlerFilterChange : (filter :FilterValue)=> void
}

export const Footer :React.FC<Props> =({
    activeCount = 0,
    onClearCompleted,
    completedCount = 0,
    filterSelectted,
    handlerFilterChange
    }) =>{
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong> {activeCount}</strong> Tareas pendientes
            </span>

            <Filters
                filterSelect = {filterSelectted}
                onFilterChange={handlerFilterChange}
            />

            {
               completedCount > 0 && (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                >
                    Borrar Completados
                </button>
               ) 
            }
        </footer>
    )
}