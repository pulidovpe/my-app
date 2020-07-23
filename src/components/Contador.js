import React, {useState, Fragment} from 'react';

const Contador = () => {

    // el estado y el que lo modifica que se puede iniciar como una var u obj
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log("Me diste un click")
        setNumero(numero+1)
    }

    return ( 
        <Fragment>
            <h3>Mi primer componente con estado: {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;