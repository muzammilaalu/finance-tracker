import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import incomeService from './incomeService';

const initialState = {
    totalIncome : [],
    income : {},
    isIncomeLoading : false,
    isIncomeError: false,
    isIcomeSuccess: false,
    isIncomeErrorMessage: false
}

const incomSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getIncome.pending, (state, action) => {
            state.isIcomeSuccess = false
            state.isIncomeError = false
            state.isIncomeLoading = true
        })
        .addCase(getIncome.fulfilled, (state, action) => {
            state.isIcomeSuccess = true
            state.isIncomeError = false
            state.isIncomeLoading = false
            state.totalIncome = action.payload
        })
        .addCase(getIncome.rejected, (state, action) => {
            state.isIcomeSuccess = false
            state.isIncomeLoading = false
            state.isIncomeError = true
            state.isIncomeErrorMessage = action.payload
        })
  }
});

export const {} = incomSlice.actions

export default incomSlice.reducer

export const getIncome = createAsyncThunk('GET/INCOME', async(_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await incomeService.incomeGet(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})