import { Switch, Route } from "react-router-dom";
import { Container, Col, Row, NavLink } from "react-bootstrap";
import Account from "./components/Account";
import LoginComponent from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Register from "./components/Register";
import CreateProduct from "./components/CreateProduct";
import Navbar from "./components/Navbar";


function App() {
  return (
    
 <div>
  <Navbar/>
     <Container>
      
    

      {/* create routes here */}
      <Switch>
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/CreateProduct" component={CreateProduct}/>
        <ProtectedRoutes path="/auth" component={Account} />
      </Switch>
    </Container>
 </div>
  );
}

export default App;