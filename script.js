const socket = io();

const input = document.getElementById('message-input');
const sendButton = document.getElementById('send');
const messages = document.getElementById('messages');

sendButton.addEventListener('click', () => {
  const msg = input.value;
  if (msg.trim()) {
    socket.emit('chat message', msg);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
