import React from 'react'
import { axios } from 'axios';

const GlobalContext =React.createContext();
export const GlobalProvider=({children})=>{
    const [incomes,setIncomes] = useState([])
    const [expenses,setExpenses] = useState([])
    const [error,setError] = useState(null)

    const addIncome=async(income)=>{
        const response=await axios.post(`${BASE_URL}add-income`,income)
        .catch((err )=>{
            setErr(err.response.data.message);
        })
    }

    return (
        <GlobalContext.Provider value={'hello'}>
            {children}
        </GlobalContext.Provider>
    )
  
}
export const useGlobalContext=()=>{
    return useContext(GlobalContext);
    }