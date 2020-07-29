import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const {register, errors, handleSubmit} = useForm();
    
    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])

        // limpiar campos
        e.target.reset();
    }


    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="Ingrese título"
                    className="form-control my-2"
                    type="text"
                    name="titulo"
                    ref={
                        register({
                            required: {value: true, message: 'Campo obligatorio'},
                            minLength: {value: 5, message: 'Mínimo 5 letras'}
                        })
                    }
                />
                <span className='text-danger text-small d-block mb-2'>
                    {errors.titulo && errors.titulo.message}
                </span>
                <input 
                    placeholder="Ingrese descripción"
                    className="form-control my-2"
                    type="text"
                    name="descripcion"
                    ref={
                        register({
                            required: {value: true, message: 'Campo obligatorio'},
                            minLength: {value: 10, message: 'Mínimo 10 letras'}
                        })
                    }
                />
                <span className='text-danger text-small d-block mb-2'>
                    {errors?.descripcion?.message}
                </span>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>

            <ul>
                {
                    Entradas.map(item => 
                        <li>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default EjemploUno;