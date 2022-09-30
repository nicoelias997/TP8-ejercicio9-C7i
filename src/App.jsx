import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import AdministradorCitas from './components/AdministradorCitas';

function App() {
  return (
    <div className="container">
        <Titulo></Titulo>
        <Formulario></Formulario>
        <AdministradorCitas></AdministradorCitas>
    </div>
  );
}

export default App;
