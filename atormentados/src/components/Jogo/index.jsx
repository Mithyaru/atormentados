import Letra from "../Letra";
import './Jogo.css';
import imgteste from '../../assets/142446793 (1).png';
import LetraOpcao from "../LetraOpcao";
import { useEffect, useRef, useState } from "react";
import lapis from '../../assets/lapis.png'
import porta from '../../assets/porta.jpg'
import zebra from '../../assets/zebra.png'

const Jogo = () => {
    const [palavras] = useState(['lapis', 'porta', 'zebra']);
    const [pontos, setPontos] = useState(0);
    const [letrasVisiveis, setLetrasVisiveis] = useState(Array(palavras[0].length).fill(false));
    const [indicePalavraAtual, setIndicePalavraAtual] = useState(0);
    const [opcoes, setOpcoes] = useState([]);
    const imagens = [lapis, porta, zebra]
    const text = 'A imagem é '

    useEffect(() => {
        gerarOpcoes(palavras[indicePalavraAtual]);
        setLetrasVisiveis(Array(palavras[indicePalavraAtual].length).fill(false)); // Reseta a visibilidade das letras
    }, [indicePalavraAtual]);

    useEffect(() => {
        verificarPalavraCompleta(); // Verifica se a palavra foi completada sempre que letrasVisiveis mudar
    }, [letrasVisiveis]);

    const gerarOpcoes = (palavra) => {
        const letrasCorretas = Array.from(new Set(palavra.split('')));
        const letrasAleatorias = 'abcdefghijklmnopqrstuvwxyz'
            .split('')
            .sort(() => 0.5 - Math.random())
            .slice(0, 10 - letrasCorretas.length);

        const todasAsOpcoes = [...letrasCorretas, ...letrasAleatorias];
        const opcoesMisturadas = shuffleArray(todasAsOpcoes).slice(0, 10);
        setOpcoes(opcoesMisturadas);
    };

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const mostrarLetra = (index) => {
        setLetrasVisiveis(prevState => {
            const newState = [...prevState];
            newState[index] = true; // Torna a letra correspondente visível
            return newState;
        });
    };

    const verificarPalavraCompleta = () => {
        if (letrasVisiveis.every(visivel => visivel)) {
            setPontos(prevPontos => prevPontos + 1); // Adiciona pontos
            setTimeout(() => {
                alert(`Você completou a palavra "${palavras[indicePalavraAtual]}"!`); // Alerta de palavra completa

                // Avança para a próxima palavra
                if (indicePalavraAtual < palavras.length - 1) {
                    setIndicePalavraAtual(prevIndex => prevIndex + 1);
                } else {
                    alert('Você coletou todas as estrelas!');
                    // Opcional: Reiniciar o jogo ou resetar o estado
                }
            }, 800);
        }
    };

    const textoRef = useRef(null);

    const falarTexto = (texto) => {
        console.log(texto);
        const synth = window.speechSynthesis;

        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.pitch = 1;
        utterance.rate = 1;

        synth.speak(utterance);
    };

    return (
        <>
            <div className="jogo-container">
                <div className="jogo">
                    <div className="img-jogo">
                        <img src={imagens[indicePalavraAtual]} alt="/*aqui vem o nome da imagem do banco*/" />
                        <span ref={textoRef}
                            style={{ cursor: 'pointer', outline: 'none', color: 'white' }}
                            tabIndex="0" // Torna o elemento focável
                            onFocus={() => falarTexto(text + palavras[indicePalavraAtual])} // Lê o texto ao focar
                            onClick={() => falarTexto(text + palavras[indicePalavraAtual])}
                        >{text + palavras[indicePalavraAtual]}</span>
                    </div>
                    <div className="jogo-dentro">
                        <div className="letras-jogo">
                            {palavras[indicePalavraAtual].split('').map((letra, index) => (
                                <div key={index} className="letra">
                                    <span style={{ display: letrasVisiveis[index] ? 'inline' : 'none' }}>
                                        {letra}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="letras-opcoes">
                        {opcoes.map((letra, index) => (
                            <button className="opcao" ref={textoRef} tabIndex={0} key={index} onFocus={() => falarTexto(letra)} onClick={() => mostrarLetra(palavras[indicePalavraAtual].indexOf(letra))}>
                                {letra}
                            </button>
                        ))}
                    </div>
                </footer>
                <div className="texto-inferior">
                    <div> Estrelinhas Obtidas: {<span className="pontos">{pontos}</span>}</div>
                    <p>aqui a gente insere a cada palavra certa uma estrela para "parabenizar" o user</p>
                    <p>no final colocaremos uma telinha de "parabéns, coletou todas as estrelas!"</p>
                </div>
            </div>
        </>
    );
};

export default Jogo;
