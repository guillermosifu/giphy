import { useEffect } from "react";
import { useState } from "react"
import { getGifs } from "../Helpers/GetGifs"
import { GifItem } from "./GifItem"

export const GifGrid =({category})=>{

const[images,setImages]=useState([]);
const[isLoading,setIsLoading]=useState(true)


useEffect(()=>{
    getGifs(category).then((newImages)=> setImages(newImages));
    setIsLoading(false)

},[])




    return(
        <div>
        <h3>{category}</h3>
        {isLoading && (<h2>Cargando</h2>)}
        <div>
            {images.map((image)=>(
                <GifItem key={image.id}{...image}/>
            ))}
        </div>
        </div>
    )
}