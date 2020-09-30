import React,{createContext,useState} from 'react';

export const  textContext = createContext();

const TextContextProvider = (props) => {
    
    const[text, setText]=useState('')

    

    return(
        <textContext.Provider value={{text , setText}}>

        {props.children}

        </textContext.Provider>
     )
    }
    
    export default TextContextProvider