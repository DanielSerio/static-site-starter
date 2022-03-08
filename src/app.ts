import express, { Application } from 'express'
import { resolve } from 'path'

const app: Application = express()

app.set('view engine', 'pug')
app.use(express.static(resolve(process.cwd(), 'public')))

export default app
