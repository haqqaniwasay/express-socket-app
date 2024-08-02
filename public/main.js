// main.js
const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

// Emit chat message on form submit
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the page from refreshing
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

// Listen for chat messages from the server
socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight; // Auto-scroll to bottom
});
