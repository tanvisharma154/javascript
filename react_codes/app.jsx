import {useState} from "react";

 function App(){
    const[count,setCount] = useState(0);

    const increment =()=>{
        setCount(count-1);
    };

    const reset = ()=>{
        setCount(0);
    };

    return(
        <div>
            <h1>Counter app</h1>
            <h2>{count}</h2>
            <button onclick ={increment}>Increment</button>
            <button onclick = {decrement}>Decrement</button>
            <button onclick = {reset}> Reset</button> 
        </div>
    );
 }
 export default App;
 
//  React Question Solve Karne Ka Standard Format
// Import required hooks/components
// Create state using useState
// Create functions
// Return JSX
// Add event handling
// Export component