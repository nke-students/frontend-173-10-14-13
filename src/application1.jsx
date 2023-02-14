import { useState } from "react";



export const Application = () => {
    const [value, setvalue] = useState(0);
    const [vvod,setname] = useState("");
    const [hidden,csetHidden] = useState(true)
    const toggle = () => setHidden((prev)=> !prev);

    return (
        <div>
            <p>Click me{value}</p>
            <button onClick={() => setvalue(value + 1)}>
                    +1
            </button>
            <button onClick={() => setvalue(value - 1)}>
                        -1
                    </button>
                    <input onChange={() => setname(vvod.target.value1)}>
                        pishi cyda
                    </input>
        </div>
    )
};