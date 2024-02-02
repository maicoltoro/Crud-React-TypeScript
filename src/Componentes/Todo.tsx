import { TodoId, type Todo as TodoType } from "../Tipos/types"

interface Props extends TodoType{
    onRemoveTodo :( {id} :TodoId) =>void
    onToggleCompleteTodo :({id, completed} : Pick<TodoType, 'id' |'completed'>) =>void
}

export const Todo : React.FC<Props> = ({id , title , completed, onRemoveTodo,onToggleCompleteTodo}) =>{
    const handlerChangeCheckbox = (event :React.ChangeEvent<HTMLInputElement>):void =>{
        onToggleCompleteTodo({
            id,
            completed :event.target.checked
        })
    }

    return(
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handlerChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={()=>{
                    onRemoveTodo({id})
                }}
            />
        </div>
    )
}