import { useRef } from "react";
import { FormikErrors, FormikValues, useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

const Contactanos = () => {
    const toast = useRef<Toast>(null);
    
    const show = () => {
        toast.current?.show({ severity: 'success', summary: 'Form Submitted'});
    };
    
    const formik = useFormik({
        initialValues: {
            rut: '',
            nombre: '',
            apellido:'',
            celular:'',
            email:'',
            Direccion:'',
            ciudad:'',
            Comuna:'',
            Mensaje:''
        },
        validate: (data) => {
            let errors: FormikErrors<FormikValues> = {};

            if (!data.nombre) {
                errors.nombre = 'Nombre - Surname is required.';
            }
            if(!data.apellido){
                errors.apellido = 'Apellido - Apellido is required.';
            }
            if(!data.email){
                errors.email = 'Email - Email is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });
    
    const isFormFieldInvalid = (name:keyof typeof formik.touched) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name:keyof typeof formik.errors) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };
    

    return(
        <>
            <div className='grid'>

                <div className='col-12'>
                    <Button label='Volver' severity='info' icon='pi pi-angle-left' text pt={{
                        root:{className:'text-blue-800'},
                        icon: {className:'text-2xl	'}
                    }} />
                </div>

                <div className='col-6'>
                    <Toast ref={toast} />
                    <h2>CONTÁCTANOS</h2>

                    <div className="card flex">
                        <form onSubmit={formik.handleSubmit} className="flex flex-column gap-1">
                            <span className="p-float-label">
                                <InputText
                                    id="nombre"
                                    name="nombre"
                                    value={formik.values.nombre}
                                    onChange={(e) => {
                                        formik.setFieldValue('nombre', e.target.value);
                                    }}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('nombre') })}
                                />
                                <label htmlFor="input_value">Nombre - Surname</label>
                            </span>
                            {getFormErrorMessage('nombre')}
                            
                            <span className="p-float-label">
                                <InputText
                                    id="apellido"
                                    name="apellido"
                                    value={formik.values.apellido}
                                    onChange={(e) => {
                                        formik.setFieldValue('apellido', e.target.value);
                                    }}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('apellido') })}
                                />
                                <label htmlFor="input_value">Apellido - Surname</label>
                            </span>
                            {getFormErrorMessage('apellido')}

                            <span className="p-float-label">
                                <InputText
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={(e) => {
                                        formik.setFieldValue('email', e.target.value);
                                    }}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('email') })}
                                />
                                <label htmlFor="input_value">Email - Surname</label>
                            </span>
                            {getFormErrorMessage('email')}

                            <Button type="submit" label="Submit" />
                        </form>
        </div>
                </div>

                <div className='col-6'>
                    <h1>Parte 2</h1>
                </div>
            </div>


        </>
    )
}

