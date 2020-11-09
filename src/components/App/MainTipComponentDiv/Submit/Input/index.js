import React, { useEffect, useState } from "react";

function Input(){
    const [newTip, setNewTip] = useState("")
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if(clicked){
            async function submitTip(){
                const res = await fetch(
                    `https://localhost:5000/createTip`,
                    { method: `POST`,
                      headers: { accept: "application/json" },
                      body: JSON.stringify({tip: newTip})
                    }
                  )
                  const data = await res.json();
                if (data.success){
                    console.log("WOOT YOU SUBMITTED A TIP!!")
                }
            };
            submitTip();
            setClicked(false);
        }
    }, [clicked, newTip])

    function handleChange(event){
        setNewTip(event.target.value);
    }

    function handleClick(){
        setClicked(true);
    }

    
    return(
        <div>
            <input onChange={handleChange} placeholder="write tip here"></input>
            <button onClick={handleClick}>Submit Tip</button>
        </div>
    )
}

export default Input;