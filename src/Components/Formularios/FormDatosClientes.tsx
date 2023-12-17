import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea'
import { useState } from 'react';
        

 
const FormDatosClientes = () => {

    const Titulo :string = 'Completa el formulario y te llamaremos para una asesoría gratuita.'
    

    return(
        <>
            <Card 
                title={Titulo} 
                pt={{
                    body: { className: 'bg-blue-800 border-round-lg' },
                    title:{ className: 'text-teal-50 text-justify	'}
                }}
                >

                <div className='p-fluid mb-3'>
                    <InputText autoFocus placeholder='Nombre'/>
                </div>

                <div className='p-fluid my-3'>
                    <InputText placeholder='Email'/>
                </div>

                <div className='p-fluid my-3'>
                    <InputText placeholder='Telefono'/>    
                </div>

                <div className='p-fluid my-3'>
                    <InputTextarea autoResize rows={5} placeholder='Cuéntanos tu caso'/>
                </div>
                
                <div className='p-fluid mt-3'>
                    <Button label="ENVIAR" severity="warning" />
                </div>
                
            </Card>


            
        </>
    )
}

export default FormDatosClientes