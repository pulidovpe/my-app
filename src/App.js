import React from 'react';
// import Jsx from './components/Jsx';
// import Lista from './components/Lista';
// import Formulario from './components/Formulario';
// import EjemploUno from './components/EjemploUno';
// import Saludo from './components/Saludo';
import Saludo from './components/Comentario';
import Comentario from './components/Comentario';

function App() {

  const sujeto = {
    nombre: 'Pulido V.P.E.',
    urlImg: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  }

  return (
    <div className="container mt-5">
      {/* <h1>Hola Mundo</h1> */}
      {/* <Jsx /> */}
      {/* <Lista /> */}
      {/* <Formulario /> */}
      {/* <EjemploUno /> */}
      {/* <Saludo persona="PulidoVPE" /> */}
      {/* <Saludo persona="Pulido V. P. E." /> */}
      {/* <Saludo persona="pulidovpe" /> */}
      <Comentario sujeto={sujeto} />
    </div>
  );
}

export default App;
