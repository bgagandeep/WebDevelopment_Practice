// const sing = async () => {
//     throw new Error('problem here');
//     return 'LALALA'
// }

// sing()
//     .then((data) => {

//         console.log("Promise resolved with ", data)
//     })
//     .catch((error => {
//         console.log("there's a problem")
//         console.log(error)
//     }))

const login = async (username,password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}

login('something','corgifeetarecute')
.then(msg => {
    console.log("Logged in")
    console.log(msg)
})
.catch(err => {
    console.log("Logged in")
    console.log(err)
})