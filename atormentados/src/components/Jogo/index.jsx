import Letra from "../Letra";
import './Jogo.css';
import imgteste from '../../assets/142446793 (1).png';
import LetraOpcao from "../LetraOpcao";
import { useState } from "react";

const Jogo = () => {
    const [palavras, setPalavras] = useState(['casa', 'abelha', 'xzebra']);


    return (
        <>
            <div className="jogo-container">

                <div className="jogo">
                    <div className="img-jogo">
                        <img src={imgteste} alt="/*aqui vem o nome da imagem do banco*/" />
                    </div>
                    <div className="jogo-dentro">
                        <div className="letras-jogo">
                            {palavras[0].split('').map((letra, index) => (
                                <span key={index} className="letra">
                                    {letra}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div>
                        <label></label>
                    </div>
                </div>
                <footer className="footer">
                    <div className="letras-opcoes">
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                        <LetraOpcao />
                    </div>
                </footer>
                <div className="texto-inferior">
                    <div> Estrelinha Obtidas:</div>
                    <p>aqui a gente insere a cada palavra certa uma estrela para "parabenizar" o user</p>
                    <p>no final colocaremos uma telinha de "parabens coletou todas as estrelas!"</p>
                </div>
            </div>
        </>
    );
};

export default Jogo;
