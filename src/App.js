
import './App.css';
import PrincipalPage from './Componentes/PrincipalPage/pagePrincipalApp';
import { AppProvider } from './AppContext'
function App() {
  return (
    <AppProvider>
      <div className="App">
        <PrincipalPage />
      </div>
    </AppProvider>

  );
}

export default App;
