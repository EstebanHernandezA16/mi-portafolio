


const pageSelected = 1

export const Navbar = () =>{
    return(
        <nav className="h-12 w-auto bg-indigo-300 text-center grid grid-cols-12 gap-1  ">
            <ul className="flex flex-row   items-center justify-center "> 
                {/* border-2 */}
                <li className="">
                    {/* w-16 rounded-sm border-2 border-indigo-200 my-1 ml-2 */}
                    <div className="">Logo</div>
                </li>
            </ul>
            <ul className="flex flex-row  col-span-9 justify-items-start items-center ">
                {/* border-2 */}
                <li className=" " onSelect={true}>
                    {/* border 1 */}
                    <a href="">Home</a>
                </li>
                <li className=" mx-2">
                    <a href="">Home</a>
                </li>
                <li className=" mx-2">
                    <a href="">Home</a>
                </li>
                <li className=" mx-2"> 
                    <a href="">Home</a>
                </li>
            
            </ul>
            <ul className="flex flex-row col-start-11 col-span-2 border-2 ">
                <li>
                    <a href="">Notifi</a>
                </li>
                <li>
                    <a href="">Perfil</a>
                </li>
            </ul>
            
            {/* <div className="bg-slate-300 p-4 ml-4 w-fit">item</div> */}
            {/* <div className="bg-slate-300 p-4 ml-4 w-fit col-span-2 col-end-7">Profile + notifications</div> */}

        </nav>
    );
}