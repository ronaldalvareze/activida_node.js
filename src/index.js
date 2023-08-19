import express from "express"
import {dirname, join} from 'path'
import { fileURLToPath } from "url"

const app = express()

const _dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(_dirname, '/views'))
app.set('views', join(_dirname, 'views'))

app.set('view engine', 'ejs')

app.get('/',(req, res) => res.render('index'))

app.listen(3000)
console.log("server online", 3000)

