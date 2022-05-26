import {Route, Switch} from "react-router-dom"
import Login from "../Pages/Login"
import Home from "../Pages/Home"

function Routes(){

    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
        </Switch>
    )
}

export default Routes;