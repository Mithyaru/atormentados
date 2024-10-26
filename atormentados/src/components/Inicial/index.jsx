import { Link } from "react-router-dom"
import "./incial.css"

const Inicial = () => {

    return (
        <>
            <div className="quadro">
                <Link to="/jogo">Jogar <img src=" " alt=""></img></Link>
            </div>
        </>
    )
}

export default Inicial