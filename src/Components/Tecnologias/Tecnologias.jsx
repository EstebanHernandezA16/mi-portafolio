import { FaReact } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaNode } from "react-icons/fa6"
import { DiMsqlServer } from "react-icons/di"
import { SiMongodb } from "react-icons/si"
import { FaGithub } from "react-icons/fa6"
import { SiPostman } from "react-icons/si";

export const Tecnologias = () =>{


    return(
        <>
       <div className="flex justify-center bg-gray-200">
            <div className="flex h-12 pb-8 w-4xl justify-center">
                <h1 className="font-bold text-xl mt-5">
                Tecnologias
                </h1>
                
            </div>
       </div>
       <div className="flex flex-row justify-center bg-gray-200 ">
            <div className="flex flex-row h-16 w-4xl mt-4 justify-center items-center grid grid-cols-12">
                <div className="flex bg-zinc-50 mx-12 font-bold p-4 rounded-xl w-40 col-start-1 col-span-3 justify-center  ">Frontend</div>
                <div className="flex bg-zinc-50 mx-12 font-bold p-4 rounded-xl w-40 col-start-4 col-span-3 justify-center  ">Backend</div>
                <div className="flex bg-zinc-50 mx-12 font-bold p-4 rounded-xl w-40 col-start-7 col-span-3 justify-center  ">Bases de datos</div>
                <div className="flex bg-zinc-50 mx-12 font-bold p-4 rounded-xl w-40 col-start-10 col-span-3 justify-center  ">Herramientas</div> 
            </div>
       </div>

        <div className="flex flex-row justify-center bg-gray-200 ">
            <div className="flex flex-row h-16 w-4xl mt-4 justify-center items-center grid grid-cols-12">
                <div className="flex bg-zinc-50 mx-12 font-bold  py-2 rounded-xl w-40 col-start-1 col-span-3 justify-center  ">
                    <div className="flex flex-row justify-center items-center min-w-17">
                        <FaReact size={42}/>
                        <RiTailwindCssFill  size={42}/>
                    </div>
                </div>
                <div className="flex bg-zinc-50 mx-12 font-bold  rounded-xl w-40 col-start-4 col-span-3 justify-center  ">
                    <div className="flex flex-row justify-center items-center min-w-17">
                         <FaNode size={60}/> 
                    </div>
                </div>
                <div className="flex bg-zinc-50 mx-12 font-bold pp-4 rounded-xl w-40 col-start-7 col-span-3 justify-center  ">
                    <div className="flex flex-row justify-center items-center min-w-17">
                         <DiMsqlServer size={58}/>
                         <SiMongodb size={58}/>
                    </div>
                </div>
                <div className="flex bg-zinc-50 mx-12 font-bold py-2 rounded-xl w-40 col-start-10 col-span-3 justify-center  ">
                    <div className="flex flex-row  justify-center items-center min-w-17">
                         <FaGithub size={42}/>
                         <SiPostman  size={42}/>
                    </div>
                    </div> 
            </div>
       </div>
       
        
       {/* <div className="flex flex-row justify-center bg-gray-200">
            <div className="flex flex-row h-16 w-4xl mt-4 justify-center items-center grid grid-col-12">
                <div className=" bg-zinc-50 mx-12 font-bold p-4 rounded-xl col-start-1 ">
                    <FaReact size={16}/>
                    <RiTailwindCssFill  size={16}/>
                   Frontend
                </div>
                <div className="flex flex-row bg-zinc-50 mx-12 font-bold  p-4 rounded-xl col-start-4">
                    <FaNode size={32}/>
                </div>
                <div className="flex flex-row bg-zinc-50 mx-12 font-bold  p-4 rounded-xl col-start-7">
                    <DiMsqlServer size={32}/>
                    <SiMongodb size={32}/>
                </div>
                <div className="flex flex-row bg-zinc-50 mx-12 font-bold  p-4 rounded-xl col-start-10">Herramientas</div>
                
            </div>
       </div> */}
       
       
       </>
    )
}