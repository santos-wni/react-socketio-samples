const nc = require("WRAP-NOTIF");

const url = 'http://localhost:8000';
const path = '';
const functions = {
  "message" : (message) => {
    console.log(`Message: ${message.msg.t}`);
    process.exit(0);
  },
  "connect" : () => {
    console.log('Connected');
  },
  "disconnect" : () => {
    console.log('Disconnected');
  },
  "reconnect" : () => {
    console.log('Reconnected');
  },
  "reconnect_error" : (err) => {
    console.log(err);
    console.log('Reconnect error. Retrying...');
  },
  "error" : (err) => {
    console.log(`Error: ${err}`);
  }
};
const opts = '';

let notif = new nc.NotifClient(url, path, functions, opts);
notif.connect();
