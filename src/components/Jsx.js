import React, {useState, Fragment} from 'react';

const Jsx = () => {

    // el estado y el que lo modifica que se puede iniciar como una var u obj
    const [numero, setNumero] = useState(15);
    //const temperatura = 21;

    const aumentar = () => {
        console.log("Me diste un click")
        setNumero(numero+1)
    }

    return ( 
        <Fragment>
            <h3>Hola JSX: {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
            <h4>
                {
                    numero > 30 ? 'Calor' : 'Frio'
                }
            </h4>
        </Fragment>
     );
}
 
export default Jsx;