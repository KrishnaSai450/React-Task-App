
import CustomCards from "../../Components/CustomCards"
import createTodoList from "./todoHelper"
import React,{useState} from "react"


const CustomTodos =()=>{

    const [todos,setTodos] = useState(createTodoList())

    const addTodoHandler =()=>{
        const currentLength = todos.length;

        myObject = {
            id:currentLength+1,
            text:`Item${currentLength+1}`
        }
        setTodos([...todos,myObject])
    }

    const deleteHandler = (targetId)=>{
        const filteredData = todos.filter(eachTodos=>{eachTodos.id != targetId})
        setTodos(filteredData)
    }




    return(
        <>
            <h3>Custom Todo List</h3>
            <button onClick={addTodoHandler}>Add Todo</button>
            <ol>
        {
            todos.map(eachTodo=>{
                const {id,item} = eachTodo
                
                return(
                    
                        <React.Fragment key={id}>
                            <CustomCards title={item} text={id} removeHandler={()=>{deleteHandler(id)}} buttonText={"Remove"}/>
                        </React.Fragment>
                    
                )
                
            })
        }
        </ol>
        </>
    )
}

export default CustomTodos