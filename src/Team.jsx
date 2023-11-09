import { useState } from "react"

export default function Team(){
    const [team, setTeam]=useState(11);
    const handleAdd=()=>{
        const newTeam=team+1;
        setTeam(newTeam);
    }
    const handleReduce=()=>{
        const newTeam=team-1;
        setTeam(newTeam);
    }
    const teamStyle={
        border:'2px solid green',
        margin:'15px',
        padding: '5px',
        borderRadius:'16px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce} >Reduce</button>
        </div>
    )
}