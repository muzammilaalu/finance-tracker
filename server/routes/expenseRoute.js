import express from "express"

//local import 
import protect from "../middleware/authMiddleware.js"
import expenseController from "../controllers/expenseController.js"



const routes = express.Router()

routes.post('/add', protect.authUser, expenseController.addExpense)

export default routes