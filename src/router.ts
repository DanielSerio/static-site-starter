import { Router } from 'express'
import { MainController } from './controllers/main-controller'
import app from './middleware'

const router: Router = Router()
const { indexPage, aboutPage, contactPage } = MainController()

router.get('/', indexPage)
router.get('/about', aboutPage)
router.get('/contact', contactPage)

app.use('/', router)

export default app
