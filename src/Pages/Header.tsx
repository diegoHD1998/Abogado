import 'primeicons/primeicons.css';
        
const Header = () => {

    return (
      <>
        <div className="grid h-8rem bg-blue-800 text-teal-50"> {/* Contenedor Principal */}
            <div className="flex flex-wrap justify-content-center align-content-center col-3 ">
                <h2>
                    Abogado S.A.
                </h2>
            
            </div>

           <div className="flex flex-wrap align-content-center col-6 ">
               <h3>"Nombre Calle" #1234 oficina 5678, Santigo</h3>
           </div>

           <div className="flex flex-column justify-content-center text-xl col-3">
                <div className='p-1'>
                     <i className="pi pi-whatsapp"></i>
                     <span>
                         <b> +569 12345678</b>
                     </span>
                 </div>
     
                 <div className='p-1'>
                     <i className="pi pi-whatsapp"></i>
                     <span>
                         <b> +569 98765432</b>
                     </span>
                 </div>
            </div>
          
        </div>
      </>
    );
}

export default Header

/* 
<div className="grid bg-blue-800 text-teal-50">

<div className="col-4">
    <h2>Abogado S.A.</h2>
</div>

<div className="col-4">
    <h3>"Nombre Calle" #1234 oficina 5678, Santigo</h3>
</div>

<div className="col-4 align-content-center text-xl">

    <div className='bg-primary'>
        <i className="pi pi-whatsapp"></i>
        <span>
            <b> +569 12345678</b>
        </span>
    </div>

    <div className='bg-red-500'>
        <i className="pi pi-whatsapp"></i>
        <span>
            <b> +569 98765432</b>
        </span>
    </div>
</div>

</div> */