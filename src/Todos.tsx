import { Todo } from "./Todo"
import {TodoId, type ListOfTodos, type Todo as TodoType} from "./types"
interface Props {
    todos:ListOfTodos
    onToggleCompleteTodo :({id, completed} : Pick<TodoType, 'id' |'completed'>) =>void
    onRemoveTodo :({id} : TodoId)=>void
}

export const Todos: React.FC<Props> = ({todos,onRemoveTodo,onToggleCompleteTodo})  =>{
    return(
        <ul className="todo-list">
            {todos.map (todo =>(
                <li 
                    key={todo.id} 
                    className={`${todo.completed} ? 'Completado': ' ' `}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed= {todo.completed}
                        onToggleCompleteTodo = {onToggleCompleteTodo}
                        onRemoveTodo = {onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}
