import { Router } from 'express'
import TodoControllers from '../controllers/TodoControllers'

const router = Router()

router.get('/todos', TodoControllers.find)
router.get('/todo/:id', TodoControllers.findOne)
router.post('/todo', TodoControllers.create)
router.patch('/todo/:id', TodoControllers.update)
router.delete('/todo/:id', TodoControllers.delete)


export default router