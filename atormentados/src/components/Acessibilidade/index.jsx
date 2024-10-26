import { useState } from 'react';
import './acessibilidade.css';
import { FaTextHeight } from "react-icons/fa6";

const Acessibilidade = () => {
    const [textoMaior, setTextoMaior] = useState(false);
    const [narradorAtivo, setNarradorAtivo] = useState(false);

    const toggleTextoMaior = () => {
        setTextoMaior(!textoMaior);
        document.body.classList.toggle('texto-maior', !textoMaior);
    };

    

    return (
        <div className="botoes-acessibilidade">
            <button onClick={toggleTextoMaior} className={textoMaior ? 'ativo' : ''}>
                <FaTextHeight size={28} />
            </button>
        </div>
    );
};

export default Acessibilidade;
