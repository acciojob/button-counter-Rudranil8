
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   const [count,setCount] = useState(0)

//   const onAdd = ()=>{
//     setCount(count+1)
//   }
//   return (
//     <div>
//     <p>Button clicked {count} times</p>
//     <button onClick={onAdd}>Click me</button>
//     </div>
//   )
// }

// export default App

import React,{useState} from "react";


const App = ()=>{

  const [count,setCount] = useState(0)

  const onAdd = ()=>{
    setCount(count+1)
  }
  return (
    <div >
    <p>Button clicked {count} times</p>
    <button onClick={onAdd}>Click me</button>
    </div>
  )
}
export default App
