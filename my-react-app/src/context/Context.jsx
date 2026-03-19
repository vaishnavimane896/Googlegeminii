import { createContext } from "react";
import Gemini from "../Confirge/Gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const onSent = async(prompt) =>{
        await Gemini(prompt)
    }

    onSent ("what is react js")
    const contextValue ={

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}

export default ContextProvider