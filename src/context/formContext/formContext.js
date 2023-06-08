import { useContext, createContext, useReducer } from "react";
import { formReducer } from "../../reducer/formReducer/formReducer";
const FormContext = createContext();

const FormProvider =({children}) =>{
    const initialState = {
        name:"",
        email:"",
        password:"",
        number:""
    };
   
    const[{name, email,password,number}, dispatch] = useReducer(formReducer, initialState)
    return(
        <FormContext.Provider value={{ name, email,password, number, dispatch}}>
            {children}
        </FormContext.Provider>
    )
} 

const useForm =() => useContext(FormContext)

export {useForm, FormProvider}