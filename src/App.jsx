import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import AdministradorCitas from './components/AdministradorCitas';
import { useEffect, useState } from 'react';

function App() {

  let storageCard = JSON.parse(localStorage.getItem("listaCitas")) || [];

  const [citas, setCitas] = useState(false)
  
  useEffect(() => {
    if(storageCard.length > 0){
      setCitas(true)
      return
    } else {
      setCitas(false)
      return
    }
  }, [setCitas, storageCard.length])



  return (
    <div className="container">
        <Titulo></Titulo>
        <Formulario></Formulario>
        {
          citas ? <AdministradorCitas></AdministradorCitas> : null
        }
    </div>
  );
}

export default App;
