import cors from 'cors'
import { urlencoded } from 'express'
import helmet from 'helmet'
import app from '../app'

app.use(cors())
if (process.env.NODE_ENV === 'production') app.use(helmet())
app.use(urlencoded({ extended: false }))

export default app
