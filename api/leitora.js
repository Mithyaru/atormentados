const textoElement = document.getElementById('texto');

function falarTexto() {
    const texto = textoElement.innerText;
    const synth = window.speechSynthesis;

    const utterance = new SpeechSynthesisUtterance(texto);

    utterance.lang = 'pt-BR'; 
    utterance.pitch = 1; 
    utterance.rate = 1; 

    synth.speak(utterance);
}

textoElement.addEventListener('focus', falarTexto);