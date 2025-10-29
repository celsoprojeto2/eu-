// --- CONFIGURAÇÃO DA SENHA ---
const CORRECT_PASSWORD = "eu+"; // <<< EDITE ESTA SENHA!

function checkPassword() {
    const enteredPassword = document.getElementById('password-input').value;
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const message = document.getElementById('message');

    if (enteredPassword === CORRECT_PASSWORD) {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.height = 'auto';
        document.title = "❤️ EITA PORRA!!! 16 ANOS DE PURO AMOR, TRETA E MUITA RISADA! ❤️"; 
    } else {
        message.textContent = 'Senha incorreta. Tente novamente, Dica: é umas das frases curtas que mais usamos, contem um pronome pessoal direto e uma operação matematica conhecida, tudo junto!';
        document.getElementById('password-input').value = '';
    }
}


// --- CONFIGURAÇÃO DOS POPUPS (MODAIS) ---

// **IMPORTANTE: 16 MENSAGENS PARA VOCÊ EDITAR**
const messages = {
    'msg1': '💖 Caramba, não clique no primeiro pq perde a graça né, o primeiro sempre contem a primeira mensagem e normalmente é só enrolação, agora não vai abrir o segundo né!?!',
    'msg2': '❤️ Não acredito que clicou no segundo!!! te amo, mais que ontem, e menos que amanhã!',
    'msg3': '💕 Você não sabe como é maravilhoso ter uma pessoa como vc em minha vida, é muito mais que o ar que eu respiro, muito mais que a luz da minha vida! é tudo!',
    'msg4': '💌 Acho que nosso amor é que nem vinho, encorpora e fica mais saboroso com o passar do tempo, nem sei se vinho encorpora mas que se lasque, o importante é a frase funcionar!',
    'msg5': '💓 Não sei se vc percebeu mas coloquei 16 icones para comemorar os 16 anos de namoro/casamento, agora para criar 16 frases ta foda kkkk',
    'msg6': '💞 As vezes relembro tudo que passamos juntos, limitado pela minha memoria falha, e fico imaginando quanto tempo mais temos pela frente, ai me vem um sentimenro... CLIQUE NO ANEL',
    'msg7': '💘 **7º Ano: A Aventura:** As viagens, os desafios e as vitórias que só compartilhamos. (Mude esta frase!)',
    'msg8': '💗 **8º Ano: A Razão:** Você é a melhor parte do meu dia, todos os dias. Você é a minha razão para sorrir. (Mude esta frase!)',
    'msg9': '😍 **9º Ano: O Olhar:** Sua beleza não está só no seu rosto, mas na sua alma. Você é linda por dentro e por fora. (Mude esta frase!)',
    'msg10': '🌹 **10º Ano: O Marco:** Uma década ao seu lado! Meu amor, cada ano é melhor que o anterior. (Mude esta frase!)',
    'msg11': '💍 **11º Ano: A Firmeza:** Nossa relação é como uma rocha, forte e inabalável. (Mude esta frase!)',
    'msg12': '🥂 **12º Ano: As Celebrações:** Por todos os momentos que brindamos e pelos que ainda virão. (Mude esta frase!)',
    'msg13': '✨ **13º Ano: A Luz:** Você é a pessoa mais luminosa que eu conheço. Obrigado por iluminar minha vida. (Mude esta frase!)',
    'msg14': '😘 **14º Ano: Carinho:** Mesmo depois de tanto tempo, seu abraço é o meu lugar favorito no mundo. (Mude esta frase!)',
    'msg15': '🥂 **15º Ano: O Amor Maduro:** Olhar para trás e ver tudo que construímos me enche de orgulho. Te amo! (Mude esta frase!)',
    'msg16': '❤️ **16º Ano: A Eternidade:** Feliz 16 anos, meu amor! Te amo hoje, amanhã e para sempre! Com todo meu carinho. Assinado: Seu "Eu+". (Mude esta frase!)'
};


// FUNÇÃO QUE ABRE O POPUP E MARCA O CORAÇÃO COMO LIDO
function openPopup(heartElement) {
    const messageId = heartElement.getAttribute('data-message-id');
    const modal = document.getElementById('my-popup');
    const popupText = document.getElementById('popup-text');
    
    // 1. Marca o coração como clicado (perde a transparência)
    heartElement.classList.add('clicked');
    
    // 2. Exibe a mensagem correspondente
    if (messages[messageId]) {
        popupText.innerHTML = messages[messageId]; 
    } else {
        popupText.innerHTML = "Erro ao carregar mensagem. 😢";
    }

    // 3. Torna o modal visível
    modal.style.display = 'block';

    // Impede a navegação padrão do link e garante que o popup funcione
    return false; 
}

function closePopup() {
    const modal = document.getElementById('my-popup');
    modal.style.display = 'none';
}

// Fecha o popup se o usuário clicar fora da caixa do modal
window.onclick = function(event) {
    const modal = document.getElementById('my-popup');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



