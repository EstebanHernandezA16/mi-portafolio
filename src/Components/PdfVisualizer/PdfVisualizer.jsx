
const ruta = '../../../public/Carta.pdf'

export const PdfVisualizer = () => {
    return(
        <div style={{width:'600', margin:'10 auto', height:'100vh'}}>
         <object
         data={ruta}
         type="application/pdf"
         width="100%"
         height="100%">
            

         </object>
        </div>
        
    );
}
