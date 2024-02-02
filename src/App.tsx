import { useEffect, useState } from "react"
import { Todos } from "./Componentes/Todos";
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./Tipos/types";
import { TODO_FILTERS } from "./Tipos/consts";
import { Footer } from "./Componentes/Footer";
import { Header } from "./Componentes/Header";
import axios from "axios";

interface estructuraTodo {
  id: string;
  title: string;
  completed: boolean;
}

const api = axios.create({
  baseURL: 'http://localhost:5000/'
})

const  App =  () : JSX.Element => {
  const [todos,SetTodos] = useState<estructuraTodo[]>([]);
  const [filterSelected , setFilterSelected] = useState<FilterValue> (TODO_FILTERS.ALL)

  const handleRemove = async ({id} :TodoId) : Promise<void> =>{
    await api.post(`/api/Todo/EliminarTodo`, {id})
    const newTodo = todos.filter(todo => todo.id !== id)
    SetTodos(newTodo)
  }

  useEffect(() =>{
    const fetchData = async () =>{
      try {
        const solicitud = await api.post(`/api/Todo/MostrarTodo`)
        SetTodos(solicitud.data) 
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }
    
    fetchData();
  },[])

  const handlerFilterChange = (filter : FilterValue) : void =>{
    setFilterSelected(filter);
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const handleComplete = async ({id , completed} :Pick <TodoType, 'id' | 'completed'>) :Promise<void> =>{

    await api.post(`/api/Todo/ActualizarTodoCompleted`, {id,completed})
    const newTodo = todos.map(todo => {
      if(todo.id == id){
        return{
          ...todo,
          completed
        }
      }
      return todo
    })
    SetTodos(newTodo)
  }

  const filterTodos = todos.filter(todo =>{
    if(filterSelected == TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected == TODO_FILTERS.COMPLETES) return todo.completed
    return todo
  })

  const handlerRemoveAllCompleted = async () : Promise<void> =>{
    const newTodo = todos.filter(todo => todo.completed)
    newTodo.forEach(async e =>{
      await api.post(`/api/Todo/EliminarTodo`, {id : e.id})
    })
    location.reload()
  }

  const handleAddTodo = async ({title}: TodoTitle) : Promise<void> =>{
    const newTodo = {
      title,
      completed : false
    }
    const solicitud = await api.post(`/api/Todo/GuardarTodo`, newTodo)
    if(solicitud.data[0].Respuesta == 1) location.reload()
  }
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos todos={filterTodos}
        onToggleCompleteTodo={handleComplete}
        onRemoveTodo = {handleRemove}
      />

      <Footer
        activeCount= {activeCount}
        completedCount={completedCount}
        filterSelectted={filterSelected}
        onClearCompleted={handlerRemoveAllCompleted}
        handlerFilterChange={handlerFilterChange}
      />
    </div>
  )
}

export default App
