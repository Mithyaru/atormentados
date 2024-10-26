import { Link } from "react-router-dom"
import "./incial.css"
import {IoMdPlayCircle} from 'react-icons/io'

const Inicial = () => {

    return (
        <>
            <div className="quadro">
                <Link to="/jogo" className="play"><IoMdPlayCircle size={150} color=""></IoMdPlayCircle></Link>
            </div>
        </>
    )
}

export default Inicial