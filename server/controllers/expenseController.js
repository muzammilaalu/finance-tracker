import Expense from "../models/expenseModel.js"


const addExpense = async(req, res) => {
    const {category, note, amount, date} = req.body
    if(!category || !amount){
        res.status(401)
        throw new Error("Category & Amount are require")
    }
    
    const newExpense = await Expense.create({
        user: req.user,
        category,
        note,
        amount,
        date : date|| new Date() 
    })

    if(newExpense){
        res.status(201).json(newExpense)
    }else{
        res.status(409)
        throw new Error("Failed to add expense")
    }
}

const expenseController = { addExpense } 

export default expenseController