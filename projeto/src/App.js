import './App.css';

import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Carlos'

  return (
    <div className="App">


     <SayMyName nome = "Alisson"/>
     <SayMyName nome = {nome}/>
     <Pessoa nome="Alisson"
     idade ="32"
     profissao="DEV"
     foto="https://via.placeholder.com/150"
    />
     </div>
  );
}

export default App;
