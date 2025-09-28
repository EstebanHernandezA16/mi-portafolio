import { useState } from "react"
import { background } from "../../Utils/constants"


export const Button = ({text}) =>{
    const [selected, setSelected] = useState(null)

    return(
        <button 
        className={`bg-gray-800 text-white font-bold py-2 px-4 rounded shadow-md ${selected?`${background} cursor-pointer`: `cursor-default`}`}
        onMouseOver={() => setSelected(true)}
        onMouseLeave={() => setSelected(null)}>
        {text}
        </button>
    )
}