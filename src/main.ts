import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Websocket Client</h1>

    <div>
      <input id='jw-token' placeholder='JSON Web Token'/>
      <button id='btn-connect'>Connect</button>
    </div>

    <br>

    <span id='server-status'>offline</span>

    <ul id='clients-ul'></ul>

    <form id='message-form'>
      <input placeholder='message' id='message-input' />
    </form>

    <h3>Messages</h3>
    <ul id='message-ul'></ul>
  </div>
`;

// connectToServer();

const jwToken = document.querySelector<HTMLInputElement>("#jw-token")!;
const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnConnect.addEventListener("click", () => {
  if (jwToken.value.trim().length <= 0) return alert("Enter a valid JWToken");

  connectToServer(jwToken.value.trim());
});
