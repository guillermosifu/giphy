import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid"



export const GitExpertApp=()=>{
const [categories,setCategories]=useState([])
const addCategory =(newCategory)=>{
    if(categories.includes(newCategory))return;

    setCategories([newCategory,...categories])
}





    return(
        <>
        <h1>Busca tu gifs</h1>
        <AddCategory   onNewCategory={addCategory}/>
        {
            categories.map((category)=>(
                <GifGrid
                key={category}
                category={category}/>
            ))
        }
        </>
    )
}