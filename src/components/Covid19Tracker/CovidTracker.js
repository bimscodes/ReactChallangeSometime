import {useEffect, useState } from "react";


const CovidTracker = ()=>{

const [data,setData]=useState({});
  
    const getCovidData= async()=>{
        try{
            const res= await fetch('https://disease.sh/v3/covid-19/countries/usa')
            const datares = await res.json()
         console.log(datares)
            setData(datares)
        }
        catch(ex){
            console.log(ex)
        }

    }


    useEffect(()=>{
getCovidData();


    },[]);
    return (
        <div>Covid Tracker
        <div>{data.c}</div>

        </div>
    )
}
export default CovidTracker 