import { Button } from "../../Elements/Button/button.jsx";
import Foto from "../../images/foto.jpg";
import { redes } from "../../Utils/constants.js";
import { Carta } from "../Carta/Carta.jsx";
import { Tecnologias } from "../Tecnologias/tecnologias.jsx";
export const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-center bg-gray-200">
        <div className="bg-white h-50 w-4xl grid grid-cols-12  ">
          <div className="flex justify-center items-center col-start-1 col-span-3 ">
            {/* <h1>Imagen</h1> */}
            <img
              src={Foto}
              alt=""
              className="mask-radial-at-center mask-radial-from-100%"
              style={{ width: "60%", height: "auto", borderRadius: "60px" }}
            />
          </div>
          <div className="flex flex-col col-span-9 ">
            <div>
              <h1 className="font-bold text-xl mt-5">
                Hola, Soy Esteban Hernandez Agudelo
              </h1>
              <h3 className="">Desarrollador Junior</h3>
            </div>
            <div className="items-end bottom-0  my-9">
              <Button text={"Ver carta"} />

              <div className="flex flex-row mt-1">
                {redes.map((red) => {
                  const IconoComponente = red.icono;
                  return (
                    <a href={red.url} className="mx-1" key={red.nombre}>
                      <IconoComponente size={30} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carta />
      
      
      <Tecnologias/>
      

    </>
  );
};
