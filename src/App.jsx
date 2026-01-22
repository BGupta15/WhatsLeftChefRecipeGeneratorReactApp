import "./App.css"
import Main from "./components/Main"
import Header from "./components/Header"
export default function App(){
  return(
    <>
      <Header/>
      <Main/>
    </>
  )
}


// import React from "react"
// export default function App(){
//   const [ans, funct] = React.useState("Yes")
//   function handleClick(){
//     funct("Definitely")
//   }
//   //funct("heck yes") this will lead to an infinity loop, causing error as change of state means rerendering and rerendering means running the code from the start, which will chage the state again
//   return(
//     <main>
//       <h1>Is state important to know</h1>
//       <button onClick={handleClick}>{ans}</button>
//     </main>
//   )
// }



// import React from "react"
// export default function App(){
//   const [count, setCount]=React.useState(0)
//   // function handleIncrease(){
//   //   setCount(count+1)
//   // }
//   function handleIncrease(){
//     setCount(function(oldValue){
//       return oldValue + 1
//     })
//   }
//   function handleDecrease(){
//     setCount((oldValue)=>oldValue-1)
//   }


//   // function handleDecrease(){
//   //   setCount(count-1)
//   // }
//   return(
//     <main>
//       <h1>How many times does bob ziroll say state</h1>
//       <button onClick={handleDecrease} className="decreaseCount">-</button>
//       <h2>{count}</h2>
//       <button onClick={handleIncrease} className="increaseCount">+</button>
//     </main>
//   )
// }

// import React from "react"
// export default function App() {
//     const [isGoingOut, setState] = React.useState(true)
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button onClick={()=>{setState(!isGoingOut)}}
//             aria-label={`the current state is ${isGoingOut?"yes":"no"}`}
//             className="value">{isGoingOut? "Yes":"No"}</button>
//         </main>
//     )
// }

// import React from "react"
// export default function App(){
//     const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
//     const [arr, addThings] = React.useState([])
//     const elements = arr.map((thing)=><h3>{thing}</h3>)
//     function addFav(){
//         addThings((oldvalue)=>[...oldvalue, allFavoriteThings[oldvalue.length]])
//     }
//     return(
//         <main>
//             {elements}
//             <button onClick={addFav}>Add elements</button>
//         </main>
//     )
// }