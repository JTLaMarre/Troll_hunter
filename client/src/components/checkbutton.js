import React,{useContext,useState} from 'react';
import {textContext} from '../contexts/text';


const CheckButton = () =>{

    const {text, setText}=useContext(textContext);
    const [bad , setBad]=useState(false);
    const badWords = ['shit','ass','fuck','gay','damn','bastard','bitch','cunt','poop']


    const handleText = ()=>{
       
        let str = text.toLowerCase()

        for(let i=0;i<badWords.length;i++){
            if(str.includes(badWords[i])){
                alert('bad word!')
                setBad(true)
                setText('**************')
            }
        }
       
    }



    return(
        <button className="button is-warning" onClick={handleText}>Hunt Trolls</button>

    )
}
export default CheckButton