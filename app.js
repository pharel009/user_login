

// const express = require('express');
// const app = express();
// const fs = require('fs');
// const path = require('path');
// const PORT = 3000;


// const { body, validationResult } = require('express-validator')

// app.use(express.json());

// const loginValidator = [
//     body('username')
//         .isAlphanumeric()
//         .matches(/[0-9]/).withMessage('username must contain at least one number and letter'),
//     body('email')
//         .isEmail().withMessage('Invalid email')
//         .matches(/[0-9]/).withMessage('email must contain at least one number'),
//     body('password').notEmpty()
//         .isLength({ min: 8 }).withMessage('password must be at least 8 character long')
//         .matches(/[A-Z]/).withMessage('password must contain at least one uppercase letter')
//         .matches(/[a-z]/).withMessage('password must contain at least one lowercase letter')
//         .matches(/[~!@#$%^&*]/).withMessage('password must contain at least one of these character: ~!@#$%^&*')
// ]

// app.post('/login', loginValidator, (req, res) => {
//     const errors = validationResult(req)
//     if(errors.isEmpty()){
//         console.log('success')
//         return res.status(200).json({ message: 'Login successful' })
//     }else{            
//         console.log('error')
//         return res.status(400).json({ message: 'Login failed' })
//     }
// })

// app.post('/register', (req,res) => {
//     const data = req.body
//     function validationResult(data){
//         if( !data.username || !data.email || !data.password ){
//             console.log('field empty')
//             return false
//         }else{
//             return true;
//         }
//     }

//     if(!validationResult(data)){
//         return res.status(400).json({ message: 'Inavlid data' })
//     }

//     fs.writeFile(path.join(__dirname, 'username'), JSON.stringify(data), (err) => {
//         if(err){
//             console.log('Error', err)
//             return res.status(500).json({ message: 'Registration denied' })
//         }else{
//             console.log('Success')
//             return res.status(200).json({ message: 'Registration successfull' })
//         }
//     })
// })

// app.get('/user/profile', (req, res) => {
//     fs.readFile(path.join(__dirname, 'user.json'), 'utf-8', (err, data) => {
//         if(err){
//             console.log('error')
//             return res.status(400).json({ message: 'cannot read file' })
//         }

//         const jsondata = JSON.parse(data)
//         return res.status(200).json({ message: 'data retrieved', data })
        
//     })
// })

// app.listen(PORT, () => {
//     console.log(`server on port ${PORT}`)
// })

