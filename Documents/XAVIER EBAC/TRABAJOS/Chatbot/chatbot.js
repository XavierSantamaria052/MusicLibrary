const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessage(text, sender = 'Usuario') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = `${sender}: ${text}`;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getSimpleResponse(message) {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("hola")) return "¡Hola! ¿Cómo estás?";
    if (lowerMsg.includes("como estas")) return "Estoy bien, gracias por preguntar.";
    if (lowerMsg.includes("tu nombre")) return "Soy un chatbot sencillo creado en JavaScript.";
    if (lowerMsg.includes("que puedes hacer")) return "Puedo responder preguntas básicas.";
    if (lowerMsg.includes("adios")) return "¡Hasta luego, que tengas un buen día!";

    return "Lo siento, no entiendo esa pregunta.";
}

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message !== '') {
    addMessage(message, 'Usuario');
    userInput.value = '';

    const reply = getSimpleResponse(message);
    setTimeout(() => {
        addMessage(reply, 'Chatbot');
    }, 500);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});