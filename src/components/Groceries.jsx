// import { useEffect, useState } from "react";
// import axios from "axios";

// export const Groceries = () => {
//     const [text, setText] = useState("");
//     const [groceries, setGroceries] = useState([]);

//     useEffect(() => {
//         getGroceries();
//     }, []);

//     const getGroceries = () => {
//          axios.get("http://localhost:3562/groceries").then((res) => {
//             setGroceries(res.data)
//         })
//     }

//     return (
//         <div>
//             <input type="text" onChange={(e)=> setText(e.target.value) }/>
//             <button
//                 onClick={() => {
//                     fetch("http://localhost:3562/groceries", {
//                         method: "POST",
//                         body: JSON.stringify({ title: text, purchased: false }),
//                         headers: {
//                             "Content-Type":" application/json"
//                         }
//                     }).then(() => {
//                         getGroceries();
//                     })
//             }}
//             >Save To List</button>
//             { groceries.map((e)=>(
//            <h3 key={e.id}>{ e.title}</h3>
//         ))}


//         </div>
//     )
// }