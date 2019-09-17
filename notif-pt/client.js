const nc = require("WRAP-NOTIF");

const url = 'http://localhost:8000';
const path = '';
const functions = {
  "message" : (message) => {
    let receiveTime = (new Date).getTime() / 1000;
    let sendTime = message.msg.data.time;
    let latency = receiveTime - sendTime;
    console.log(`${receiveTime}, Message, ${sendTime}, ${latency}`);
    console.log(`Latency: ${latency.toFixed(2)}`);
    process.exit(0);
  },
  "connect" : () => {
    let receiveTime = (new Date).getTime() / 1000;
    console.log(`${receiveTime}, Connected`);
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
