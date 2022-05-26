import "./styles.css"
import {useHistory} from "react-router-dom"

function Welcome() {

    const user = localStorage.getItem("userEmail")
    const history = useHistory();

    if(!user){
        history.push("/");
    }

    const Logout = () =>{
        localStorage.clear();
        history.push("/")
    }

    return(
        <div className="box-welcome">
            <div className="container">
                <h3 className="title-home">Olá, seja bem vindo, {user}!</h3>
                <button className="btn-Logout" onClick={()=> Logout()} >Sair</button>
            </div>
        </div>
    )
}

export default Welcome;