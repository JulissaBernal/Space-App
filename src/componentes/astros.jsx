import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import './astros.css'

function AstroCard({name,craft}){
    return(
        <>
        <div className="astro-card">
            <p className="astro-name">{name}</p>
            <p className="astro-craft">{craft}</p>
        </div>
        </>
    )
}
function Astros(){
    const API_URL="http://api.open-notify.org/astros.json"
    const[astros,setAstros]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            const data= await fetch(API_URL)
            const res= await data.json();
            setAstros(res.people)
        };
        fetchData().catch((err)=>console.log(err))
    },[]);
    
    return(
        <div className="astro-container">
            {!astros ? (
                <CircularProgress color="secondary" />
            ): (
                astros.map((astro,id)=> <AstroCard key={id}{...astro}/>
        ))}
        </div>
    );
}
export default Astros;