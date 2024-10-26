import { Link } from "react-router-dom"
import {TbAbc} from 'react-icons/tb'
import './nav.css'

const Nav = () => {

    return (
        <>
        <div className="nav">
            <Link to={'/'} className="navIcon"><TbAbc size={65}></TbAbc></Link>
        </div>
    
        </>
    )
}

export default Nav