import { Todoitem } from "./Todoitem"
export function List ({ todos , toggleTodo , deleteTodo}){
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return  (
          <Todoitem 
          {...todo}
          key={todo.id}
         toggleTodo={toggleTodo} 
         deleteTodo={deleteTodo}
          />
         
        )
        })}
      </ul>
    )
}