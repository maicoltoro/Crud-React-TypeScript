import { useState } from "react"
import { Todos } from "./Todos";
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./Footer";
import { Header } from "./Header";

const mockTodos = [
  {
    id : '1',
    title : 'Aprender React',
    completed: false
  },
  {
    id : '2',
    title : 'Aprender TypeScript',
    completed: true
  },{
    id : '3',
    title : 'Aprender Angular',
    completed: false
  },{
    id : '4',
    title : 'Conseguir trabajo',
    completed: true
  },
]

const  App = (): JSX.Element => {
  const [todos,SetTodos] =useState(mockTodos);
  const [filterSelected , setFilterSelected] = useState<FilterValue> (TODO_FILTERS.ALL)

  const handleRemove = ({id} :TodoId) :void =>{
    const newTodo = todos.filter(todo => todo.id !== id)
    SetTodos(newTodo)
  }

  const handlerFilterChange = (filter : FilterValue) : void =>{
    console.log(filter)
    setFilterSelected(filter);
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const handleComplete = ({id , completed} :Pick <TodoType, 'id' | 'completed'>) :void =>{
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

  const handlerRemoveAllCompleted = () :void =>{
    const newTodo = todos.filter(todo => !todo.completed)
    SetTodos(newTodo)
  }
  const handleAddTodo = ({title}: TodoTitle) : void =>{
    const newTodo = {
      id:crypto.randomUUID(),
      title,
      completed : false
    }
    const newTodos = [...todos, newTodo]
    SetTodos(newTodos)
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
