import { BrowseRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';


function App() {
  const [nome, setNome] = useState()
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
