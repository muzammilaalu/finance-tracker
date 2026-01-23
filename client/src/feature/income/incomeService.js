import axios from "axios"

const incomeGet = async(token) => {
    let options = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
  
    const response = await axios.get('api/income/all', options)
    return response.data
}

const incomeService = { incomeGet } 

export default incomeService

