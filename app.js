const express = require('express')
const {listen} = require ('express/lib/application')

//localhost:9050/profile

const port = 9050
const app = express()

app.get('/profile',(peticion, res) => {
    res.json(
        {name: 'Steeven',
        age: 25,
        country: 'Ecuador'}
    )
})

app.post('/profile',(peticion,res)=>{
    res.json([{company:'Microsoft'},{company:'Google'},{company:'StackBuilder'}])
})

app.patch('/profile',(peticion,res)=>{
    res.json([{hobbie: 'Guitar'},{hobbie: 'VideoGames'},{hobbie:'Series'}])
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})