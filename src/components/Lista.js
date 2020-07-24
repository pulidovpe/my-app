import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])    
    const [numero, setNumero] = useState(6)

    const agregarElemento = () => {
        console.log("Se hizo click")
        setNumero(numero+1)
        setArrayNumero([
            ...arrayNumero,
            numero
        ])
    }

    return ( 
        <Fragment>
            <h3>Lista con indice</h3>
            <button onClick={agregarElemento}>Agregar Elemento</button>
            {
                arrayNumero.map((item, index) => 
                    <p key={index}>{item} - {index}</p>
                )
            }
        </Fragment>
     );
}
 
export default Lista;