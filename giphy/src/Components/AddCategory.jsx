import { useState } from "react";

export const AddCategory =({onNewCategory})=>{

const [inputValue,setInputValue]= useState("")

const onInputChange =({target})=>{
    //recibimps empre el evetto 
    setInputValue(target.value)
}
 const onSubmit = (e)=>{
    e.preventDefault()
    if(inputValue.trim().length <=1){
        return;
    }
    onNewCategory(inputValue.trim())
    setInputValue("")

 }


    return(
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Buscar Gift"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>

    )
}