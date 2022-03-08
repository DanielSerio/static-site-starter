import { Router } from 'express'
import { MainController } from './controllers/main-controller'
import app from './middleware'

const router: Router = Router()
const { indexPage } = MainController()

router.get('/', indexPage)

app.use('/', router)

export default app
