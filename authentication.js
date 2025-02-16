//USER AUTHENTICATION - password login

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const PORT = 8080;

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { username: req.body.username, password: hashedPassword }
        users.push(user)
        res.status(201).json({
            condition: 'success',
            data: {
                users: users
            }
        })
    }catch{
        res.status(500).send()
    }
})
    app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.username == req.body.username)
    if(user==null){
        return res.status(400).send('cannot find user')
    }
    try{
       if(await bcrypt.compare(req.body.password, user.password)){
            res.send('success')
       }else{
        res.send('not allowed')
       }
    }catch{
        res.status(500).send()
    }
})






app.listen(PORT, () => {
    console.log('server is listening...')
})