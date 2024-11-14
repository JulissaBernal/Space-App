import { useEffect, useState } from "react";
import './apod.css'
import CircularProgress from '@mui/material/CircularProgress';

function Apod(){
    // const key=process.env.REACT_APP_APOD_API_KEY;
    const API_URL='https://api.nasa.gov/planetary/apod?api_key=TSoXhwAKM1SmhKwAhHtVqH792SNfE88coFKzP2Cr';
    
    const[apod,setApod]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            const data=await fetch(API_URL);
            const res=await data.json();
            setApod(res)
            console.log(res)
        }
        fetchData().catch((err)=>console.log(err))
    },[])
    
    return(
        <div className="content">
            {!apod ? (<CircularProgress color="secondary"/>):  
            (<div className="content">
                <img className="img-apod" src={apod.url}/>
                 <h1>{apod.title}</h1>
                <p>{apod.explanation}</p>
            </div>
            )
            }
        </div>
    )
}
export default Apod;