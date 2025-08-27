import { useEffect, useState } from "react";

const User = (props) =>{

    const [count,setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        // Api calls
        setInterval(()=>{
            console.log("timer")
        },1000);   // it wont stop

        return () =>{    // it called when you unmounting the component / leaves the page
          console.log("stop")
        }
    },[count])

   useEffect(()=>{
        // Api calls
    },[count2])
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count = {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location:Dehradrun</h3>
            <h4>Contact: @khushi30</h4>
        </div>

    )
}
export default User;