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
    'msg7': '💘 Este a gente sabe o que significa, desde o inicio a gente aponta o dedo um para o outro indicando o coração espetado com a flecha... não é muito frufru cuticuti? 💘 💘 vai para o proximo coração ',
    'msg8': '💗 Eu queria ter te conhecido antes sabia... provavelmente minha vida não teria sido tão cheia de aventuras, mas eu conheceria o amor mais cedo e saberia dar valor a vida, dentro de um hospicio claro! vá para a rosa',
    'msg9': '😍 Pqq eu sou vingativo, vc me zoa, eu te zouo ou zoo ou zuo sei la eu me zouo tb kkkk va para a estrela',
    'msg10': '🌹 E é assim, nossa vida é cheia de declarações e gestos de amor, e eu sempre colocando uma pitada de zueira no meio de tudo, pq né? va para o rosto com corações nos olhos.',
    'msg11': '💍 EU NÃO AGUENTO MAISSSSSSSSSSS  AHHHHHHHHH!!!! kkk zueira, eu não tenho escolha, kkkkkk vai para o coração com flecha no meio...',
    'msg12': '🥂 Parabensssss, obrigado por fazer parte de minha vida e deixa-la mais emocionante, literalmente... va para o ultimo coração da tela.',
    'msg13': '✨ De qualquer forma, estou usando meu tempo perdido tentando aprender a crias paginas de internet, para fazer esta homenagem, para te lembrar que é vc que me faz feliz todos os dias e pq eu te amo, muitoooo muitooo muitooo! va para a taça do lado do anel',
    'msg14': '😘 Então é isso, é simples, vc é tudo pra mim, não quero nunca ficar longe de vc, sempre colado, tirando qdo eu quero ficar no computador ou quando ta calor... te amooo, vai para a outra taça.',
    'msg15': '🥂 Feliz aniverssárioooo....  opaaa... não... aqui ainda esta em construção... aguarde...',
    'msg16': '❤️ Eu mais lalala, ja to começando a encher linguiça, kacete, qundo a gente tiver 50 anos juntos, serão 50 frazes, to fudido... va para a carinha com beijinho..'
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




