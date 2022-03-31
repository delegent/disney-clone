import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Create from "./components/Create";
import Details from "./components/Details";
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/detail/:id">
          <Details />
        </Route>
        <Route exact path="/add-new">
          <Create />
        </Route>
        {/* /add-new */}
      </Switch>
    </Router>
  );
}
