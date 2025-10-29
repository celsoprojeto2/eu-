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
    'msg1': '💖 **1º Ano: O Início:** Nossas primeiras risadas, o frio na barriga e a certeza de que tínhamos algo especial. Você é a magia nos meus dias. (Mude esta frase!)',
    'msg2': '❤️ **2º Ano: A Descoberta:** Descobrir sua alma e seu coração foi o maior presente. (Mude esta frase!)',
    'msg3': '💕 **3º Ano: A Conexão:** Nossas conversas, risadas bobas e a cumplicidade que só a gente tem... É por isso que te amo tanto! (Mude esta frase!)',
    'msg4': '💌 **4º Ano: O Compromisso:** Quando dissemos "sim" para a vida inteira. Lembro de cada detalhe daquele dia. (Mude esta frase!)',
    'msg5': '💓 **5º Ano: A Família:** Nossos sonhos, nossos planos, a base do nosso ninho. (Mude esta frase!)',
    'msg6': '💞 **6º Ano: Admiração:** Admiro a sua força, o seu caráter e a sua doçura. Você me inspira a ser melhor. (Mude esta frase!)',
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

