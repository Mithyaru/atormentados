import { useRef } from "react";
import "./LetraOpcao.css"

const LetraOpcao = () => {
    const textoRef = useRef(null);

    const falarTexto = () => {
        const texto = textoRef.current.innerText; // Obtém o texto do elemento
        const synth = window.speechSynthesis;

        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.pitch = 1;
        utterance.rate = 1;

        synth.speak(utterance);
    };

    
    return (
        <>

            <button className="opcao"  ref={textoRef} 
                tabIndex={0} onFocus={falarTexto}>
                batorenida
            </button>

        </>
    )
}

export default LetraOpcao