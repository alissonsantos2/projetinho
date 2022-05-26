
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

import './App.css';

function App() {
  return (
    <div className="App">
      <Frase/>
    
      <Pessoa
        nome="Alisson"
        idade="32"
        profissao="DEV"
        foto="https://via.placehoder.com/150"
      />
      <List/>
    </div>
  );
}

export default App;
