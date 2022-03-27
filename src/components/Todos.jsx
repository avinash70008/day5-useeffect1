import { useEffect, useState } from "react"

import axios from "axios";


export const Todos = () => {
    const [task, setTask] = useState("");

    const [list, setList] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(() => {
        getTasks();
    }, [page]);
    
    const getTasks = () => {
         axios.get(`http://localhost:3001/tasks?_limit=3&_page=${page}`).then((res) => {
            setList(res.data)
        })
    }
    
    return <div>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button
            onClick={() => {
                fetch("http://localhost:3001/tasks", {
                    method: "POST",
                    body: JSON.stringify({ title: task, status: false }),
                    headers: {
                        "Content-Type" : "application/json",
                    },
                }).then(() => {
                    getTasks();
                });
        }}
        >Save</button>
       { list.map((e)=>(
           <div key={e.id}>{ e.title}</div>
        ))}

        <button onClick={() => {
            setPage(page - 1);
        } }>prev</button>
        <button onClick={() => {
            setPage(page + 1);
        } }
        >next</button>
    </div>
}