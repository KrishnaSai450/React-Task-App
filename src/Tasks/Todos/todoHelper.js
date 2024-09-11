const createTodoList=()=>{
    const todos = []

    for(let i=1;i<=10;i++){
        const myObject = {
            id:i,
            text:`Item${i}`
        }
        todos.push(myObject)
    }

    
    // const myObject = {
    //             id:1,
    //             text:`Item${1}`
    //         }
    //         todos.push(myObject)
    

    return todos;

}

export default createTodoList