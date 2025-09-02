import { useNavigate } from "react-router"

export default function Home(){
    let navigate = useNavigate()
    return(
        <div>
            <h1>Wellcome to riddle game!</h1>
            <button onClick={()=> navigate('liverbord')}>Leaderbord</button>
            <button onClick={()=> navigate('play')}>Play</button>
            <button onClick={()=> navigate('login')}>Log in</button>
        </div>
    )
}