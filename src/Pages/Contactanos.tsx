import { useRef } from "react";
import { FormikErrors, FormikValues, useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { InputTextarea } from "primereact/inputtextarea";

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
            region:'',
            ciudad:'',
            comuna:'',
            direccion:'',
            mensaje:''
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
            <div className='flex flex-wrap px-6'>

                <div className='col-12'>
                    <Button label='Volver' severity='info' icon='pi pi-angle-left' text pt={{
                        root:{className:'text-blue-800'},
                        icon: {className:'text-2xl	'}
                    }} />
                </div>

                <div className='col-12 lg:col-6 '>
                    <Toast ref={toast} />
                    <h2>CONTÁCTANOS</h2>

                    <div className="card flex">
                        <form onSubmit={formik.handleSubmit} className="flex flex-column gap-1 p-fluid">
                            
                            <div className="flex gap-6">

                                <div>
                                    <span>Rut*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="rut"
                                            name="rut"
                                            value={formik.values.rut}
                                            onChange={(e) => {
                                                formik.setFieldValue('rut', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('rut') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('rut')}
                                </div>

                            </div>

                            <div className="flex gap-6">

                                <div>
                                    <span>Nombre*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="nombre"
                                            name="nombre"
                                            value={formik.values.nombre}
                                            onChange={(e) => {
                                                formik.setFieldValue('nombre', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('nombre') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('nombre')}
                                </div>
                                
                                <div>
                                    <span>Apellido*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="nombre"
                                            name="nombre"
                                            value={formik.values.nombre}
                                            onChange={(e) => {
                                                formik.setFieldValue('nombre', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('nombre') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('nombre')}
                                </div>

                                

                            </div>

                            <div className="flex gap-6">

                                <div>
                                    <span>Celular*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="nombre"
                                            name="nombre"
                                            value={formik.values.nombre}
                                            onChange={(e) => {
                                                formik.setFieldValue('nombre', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('nombre') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('nombre')}
                                </div>
                                
                                <div>
                                    <span>Email*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="apellido"
                                            name="apellido"
                                            value={formik.values.apellido}
                                            onChange={(e) => {
                                                formik.setFieldValue('apellido', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('apellido') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('apellido')}
                                </div>

                            </div>

                            
                            <div className="flex gap-6">

                                <div>
                                    <span>Region*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="nombre"
                                            name="nombre"
                                            value={formik.values.nombre}
                                            onChange={(e) => {
                                                formik.setFieldValue('nombre', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('nombre') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('nombre')}
                                </div>

                                <div>
                                    <span>Ciudad*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="apellido"
                                            name="apellido"
                                            value={formik.values.apellido}
                                            onChange={(e) => {
                                                formik.setFieldValue('apellido', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('apellido') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('apellido')}
                                </div>

                            </div>

                            <div className="flex gap-6">

                                <div>
                                    <span>Comuna*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="nombre"
                                            name="nombre"
                                            value={formik.values.nombre}
                                            onChange={(e) => {
                                                formik.setFieldValue('nombre', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('nombre') })}
                                            
                                        />
                                    </span>
                                    {getFormErrorMessage('nombre')}
                                </div>

                                <div>
                                    <span>Direccion*</span>
                                    <span className="p-float-label">
                                        <InputText
                                            id="apellido"
                                            name="apellido"
                                            value={formik.values.apellido}
                                            onChange={(e) => {
                                                formik.setFieldValue('apellido', e.target.value);
                                            }}
                                            pt={{
                                                root: { className: 'border-round-3xl' }
                                            }}
                                            className={classNames({ 'p-invalid': isFormFieldInvalid('apellido') })}
                                        />
                                    </span>
                                    {getFormErrorMessage('apellido')}
                                </div>

                            </div>
                            
                            <div className="">
                                <span>Mesaje*</span>
                                <span className="p-float-label">
                                    <InputTextarea
                                        id="apellido"
                                        name="apellido"
                                        rows={5}
                                        cols={56}
                                        value={formik.values.apellido}
                                        onChange={(e) => {
                                            formik.setFieldValue('apellido', e.target.value);
                                        }}
                                        pt={{
                                            root: { className: 'border-round-3xl' }
                                        }}
                                        className={classNames({ 'p-invalid': isFormFieldInvalid('apellido') })}
                                    />
                                </span>
                                {getFormErrorMessage('apellido')}
                            </div>
                            
                            
                            <Button type="submit" label="Submit" rounded />
                        </form>
                    </div>
                </div>

                <div className='col-12 lg:col-6'>
                    <h1>Parte 2</h1>
                </div>
            </div>
        </>
    )
}

export default Contactanos