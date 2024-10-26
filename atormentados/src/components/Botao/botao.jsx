const Botao = () => {

    function playSound(){
        const sound = document.getElementById('click-sound');
        sound.currentTime = 0;
        sound.play();
    }

    return (
        <>

            <div class="botao" onClick='playSound()' placeholder='botão de play'>
                <span class="play-icon">Jogar</span>
            </div>

        </>
    )

}

export default Botao