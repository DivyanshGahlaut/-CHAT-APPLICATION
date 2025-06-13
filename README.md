# -CHAT-APPLICATION

"company": CODTECH IT SOLUTIONS

"NAME":DIVYANSH GAHLAUT

"INTERN ID" :CT04DG831

"DOMAIN" : Full Stack Web Development

"DURATION": 4 WEEKS

"MENTOR" : NEELA SANTOSH

* Project Description
  This Real-time Chat Application is a web-based tool that enables users to send and receive messages instantly using a simple and clean interface. The project is built to demonstrate real-time communication through WebSockets, providing a practical example of how modern chat systems work.

The goal of this project is to create a responsive and interactive user experience, where messages are exchanged in real time without refreshing the page. It can serve as a base for more advanced chat systems that include features like multiple users, authentication, message history, and more.

* Tools & Technologies Use
  | Category        | Technology                            

**Frontend**     HTML, CSS, JavaScript                 
**Backend**      Node.js, Express.js                   
**Real-time**    Socket.IO                             
**Environment**  Node Package Manager (npm)            
**Editor**       Visual Studio Code (VS Code)          
**Browser**      Google Chrome (or any modern browser) 

* How It Works
  
  Frontend (Client-Side)

HTML creates the structure (chat box, input, send button).

CSS styles the layout for a clean, modern look.

JavaScript connects to the server using Socket.IO and listens for messages.

When the user types a message and clicks "Send", it is emitted to the server.

Backend (Server-Side)

The Node.js server uses Express to serve the frontend files.

The server uses Socket.IO to establish a WebSocket connection with each client.

When a client sends a message, the server broadcasts it to all connected clients in real time.

Communication Flow

Server runs at localhost:3000.

Socket.IO handles the bi-directional real-time communication.

Messages instantly appear in the chat window of all clients.
