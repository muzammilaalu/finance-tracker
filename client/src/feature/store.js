import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import income from "./income/incomSlice"
import expense from "./expense/expenseSlice"
import summary from "./summary/summarySlice"


const store = configureStore({
    reducer : { auth, income, expense, summary }
})

export default store