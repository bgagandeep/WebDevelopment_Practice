let input = prompt('what would you like to do?')
const todos = ['Dummy Todo 1','Dummy Todo 2'];
while(input !== 'quit' && input !=='q'){
    if(input === 'list'){
        console.clear()
        console.log('************')
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('************')
    }else if(input === 'new'){
        const newTodo = prompt('Please provide new Todo');
        todos.push(newTodo)
        console.clear()
        console.log(`${newTodo} added to list`)
    }else if(input === 'delete'){
        console.clear()
        console.log('************')
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('************')
        const index = parseInt(prompt('What todo is to be deleted, provided index.'))
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1)
            console.log(`deleted todo: ${deleted[0]}`)
        }else {
            console.log("Invalid entry")
        }

    }
    input = prompt('what would you like to do?')

}
console.clear()
console.log('Thank you for using the app!')