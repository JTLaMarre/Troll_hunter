import React,{useContext} from 'react';
import {textContext} from '../contexts/text';

const Textarea =()=>{


const {text , setText}=useContext(textContext)


    return(
        <textarea className="textarea" placeholder="text here" value={text} onChange={e=>setText(e.target.value)}></textarea>
    )
}

export default Textarea