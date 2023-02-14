import axios from "axios";
import { useEffect, useState } from "react"

export const Application = () => {
    const [userid,setuserid] = useState(1)
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(Response => setItems(Response.data))

    }); [userid];

    return (<div>
        <input onChange={(e) => setuserid(Number(e.target.value))}/>
        <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>)
}