import { useNavigate } from "react-router"
import Navbar from "../components/Navbar"

export default function Login(){
    let navigate = useNavigate();
    return(
        <div>
            <Navbar />
            <h1>Wellcome to log in</h1>
            <input type="text" placeholder="enter your name"/>
            <input type="text" placeholder="enter your password"/>
            <button onClick={()=> navigate('menu')}>go to menu</button>
        </div>
    )
}