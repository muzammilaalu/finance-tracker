import Income from "../models/incomeModel.js"


const addIncome = async(req, res) => {
    const { source, amount, date} = req.body

    if(!amount) {
        res.status(409)
        throw new Error("Amout is required !")
    }

    const newIncome = await Income.create({
        user: req.user,
        source,
        amount,
        date : date || new Date(),
    })

    if(newIncome){
        res.status(201).json(newIncome)
    }else{
        res.status(409)
        throw new Error("Failed to add income")
    }
}

const incomeController = {addIncome}

export default incomeController