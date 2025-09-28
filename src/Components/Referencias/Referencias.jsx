import { useEffect, useState } from "react"
import { referencias } from "../../Utils/constants"
import { Button } from "../../Elements/Button/button"
import { alertaContacto } from "../../Utils/utils"


export const Referencias = () =>{
    const [datos, setDatos] = useState(referencias)



    return(
        <div>
            {datos && (
                <>
                <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col justify-start items-center w-4xl h-content  my-5">   
                    <h1 className="font-bold text-xl my-5">
                Referencias Profesionales
                </h1>
                    <div className="flex flex-row">
                {datos.map((referencia)=>(
                    
                        <div class="max-w-4xl mx-16 ">
                            <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                                <p class="text-xl font-semibold text-gray-800">{referencia.nombre}</p>
        
                                <p class="text-indigo-600 mt-1 mb-3">{referencia.cargo} </p>
                                <p class=" text-xs text-gray-400">{referencia.empresa}</p>
        
                                <p class="text-sm text-gray-500 italic border-l-2 pl-3 mt-4">
                                    "Trabajo en equipo, adaptabilidad y una curva de aprendizaje excepcional."
                                </p>
                                <div className="mt-5">
                                    <Button text={'Ver datos de contacto'} onClickAction={()=> alertaContacto(referencia)}/>
                                </div>
                                 
                            </div>
                        </div>
               ))}
               </div>
                </div>
                </div>
                </>
            )}
        </div>
    )
}