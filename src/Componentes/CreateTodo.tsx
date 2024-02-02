import { useState } from "react"
import { TodoTitle } from "../Tipos/types"

interface Props {
    saveTodo :({title} :TodoTitle) => void
}

export const CreateTodo :React.FC<Props> = ({saveTodo})=>{

    const [inputValue , setinputValue ] = useState('')

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void =>{
        event.preventDefault()
        saveTodo({title :inputValue})
        setinputValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                onChange={(e) =>{setinputValue(e.target.value)}}
                placeholder="¿Que quieres hacer?"
                autoFocus
            />
        </form>
    )
}