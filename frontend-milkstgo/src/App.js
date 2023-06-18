import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import ProveedoresComponent from './components/ProveedoresComponent';
import ArchivosComponent from './components/ArchivosComponent';
import PlanillaComponent from './components/PlanillaComponent';
import './App.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/proveedores" component={ProveedoresComponent} />
          <Route path="/archivos" component={ArchivosComponent} />	
          <Route path="/planilla" component={PlanillaComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
