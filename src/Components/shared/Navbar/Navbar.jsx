import { useState } from "react";
import vitelogo from '../../../images/Vitejs-logo.svg'
import { background } from "../../../Utils/constants";

export const Navbar = () =>{
    const[selected, setSelected] = useState(null)
//  selected = sky-500


 const reset = () =>{
    setSelected(null)
 }

    return(
        <nav className="h-12 w-auto text-white bg-stone-900 text-center grid grid-cols-12 gap-1 items-center ">
            <ul className="flex flex-row  col-start-3 col-span-2 items-center justify-center   "> 
          
                <li className={`flex items-center justify-center mx-1 w-content min-w-16 h-12 ${selected == 1 ?  `${background} cursor-pointer`: `cursor-default`}`}>
                    <div onMouseOver={() => setSelected(1)} onMouseLeave={() => reset()}> <img src={vitelogo} style={{width: '40px', height:'auto'}}/></div>
                </li>
                <li className={`flex items-center justify-center mx-1 w-content min-w-16 h-12 ${selected == 2 ? `${background} cursor-pointer`: `cursor-default`}`}>
                    <a onMouseOver={() => setSelected(2)} onMouseLeave={() => reset()}>Inicio</a>
                </li>
            </ul>
            <ul className="flex flex-row  col-start-7 col-span-3 items-center justify-center  ">
              
                
                <li className={`flex items-center justify-center mx-1 w-content min-w-20 h-12 ${selected == 3 ? `${background} cursor-pointer`: `cursor-default`}`}>
                    <a onMouseOver={() => setSelected(3)} onMouseLeave={() => reset()}>Sobre Mi</a>
                </li>
                <li className={`flex items-center justify-center mx-1 w-content min-w-24 h-12 ${selected == 4 ? `${background} cursor-pointer`: `cursor-default`}`}>
                    <a onMouseOver={() => setSelected(4)} onMouseLeave={() => reset()}>Habilidades</a>
                </li>
                <li className={`flex items-center justify-center mx-1 w-content min-w-24 h-12 ${selected == 5 ? `${background} cursor-pointer`: `cursor-default`}`}> 
                    <a onMouseOver={() => setSelected(5)} onMouseLeave={() => reset()}>Contacto</a>
                </li>
            
            </ul>

            
           

        </nav>
    );
}