import Letra from "../Letra";
import './Jogo.css';
import imgteste from '../../assets/142446793 (1).png';
import LetraOpcao from "../LetraOpcao";

const Jogo = () => {
    return (
        <>
            <div className="jogo-container">
                <div className="jogo">
                    <div className="img-jogo">
                        <img src={imgteste} alt="/*aqui vem o nome da imagem do banco*/" />
                    </div>
                    <div className="jogo-dentro">
                        <div className="letras-jogo">
                            <Letra />
                            <Letra />
                            <Letra />
                            <Letra />
                            <Letra />
                        </div>
                        <div className="letras-jogo">
                            <Letra />
                            <Letra />
                            <Letra />
                            <Letra />
                            <Letra />
                        </div>

                    </div>

                    <div>
                        
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
            </div>
        </>
    );
};

export default Jogo;
