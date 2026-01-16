import express, { json } from 'express'
import connectDb from './config/dbConfig.js'

//local import
import errorHandler from './middleware/errorHandler.js'
import authRoute from "./routes/authRoute.js"
import incomeRoute from "./routes/incomeRoute.js"


const app = express()

const PORT = process.env.PORT || 3000

connectDb()

  app.get('/', (req, res) => {
    res.json({
       message:  'welcome to Finance Tracker API 1.00 😉 '
    })
  })

  app.use(express.json())
  app.use(express.urlencoded())

  //for error handle
  app.use(errorHandler)

  //for auth user
  app.use("/api/auth",authRoute)

  //for income
  app.use("/api/income", incomeRoute)

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT ${PORT}`))