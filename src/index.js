import express from 'express'



const app = express()

app.set('view engine' , 'ejs')

app.get('/' ,(req, res) => res.send('hey funciona'))

app.listen(3000)
console.log("hey funciona" ,3000)

