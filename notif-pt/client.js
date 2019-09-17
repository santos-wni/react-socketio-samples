const nc = require("WRAP-NOTIF");

// const url = 'http://localhost:8000';
// const path = '';
// const opts = '';

// const IDTOKEN_VALID  ='eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI5d2JIdDh1ak5yMUUtbWJFcDN1UUEydlZKUmtoZjlTQ2hFVS1jWlphVjI4In0.eyJqdGkiOiI3Y2U5MTk2OS1mYWQzLTQwYjItODMzMC1hYjM4MmZkZGM4MGIiLCJleHAiOjE1NjU2NjAxMjQsIm5iZiI6MCwiaWF0IjoxNTY1MDU1MzI0LCJpc3MiOiJodHRwczovL3B0LXdyYXAud25pLmNvbS9hdXRoL3JlYWxtcy93cmFwLWNhdGFseXN0IiwiYXVkIjoibmV3LWF1dGgiLCJzdWIiOiI1YmVjNDA4MS0yYzVhLTQzOTMtODgxZS1kNjM1YzIyYjFmNmUiLCJ0eXAiOiJJRCIsImF6cCI6Im5ldy1hdXRoIiwibm9uY2UiOiJoMmItbDctRi1uVjhjZkdnZE5FU3dpQ0xqZ3ZjT2g3ZXFncjlGQzZ6ZmRBIiwiYXV0aF90aW1lIjoxNTY1MDU1MzIzLCJzZXNzaW9uX3N0YXRlIjoiMGUyNDA5ZmUtNjIxMi00NzRiLWFkM2MtNDk3MGMwZWQwOGE0IiwiYWNyIjoiMSIsInVzZXJfaWQiOiJzdWRhIiwibmFtZSI6IumgiOeUsCDnm7Tlk4kgTmFveWEgU1VEQSBXTkkgaWNvcm5lciBXUkFQIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic3VkYSIsImdpdmVuX25hbWUiOiLpoIjnlLAg55u05ZOJIiwiZmFtaWx5X25hbWUiOiJOYW95YSBTVURBIFdOSSBpY29ybmVyIFdSQVAiLCJlbWFpbCI6InN1ZGFAd25pLmNvbSIsImxpY2Vuc2VfZ3JvdXBzIjpbIkRldi1Hcm91cDpzdGFmZiJdfQ.CgmK5srDop5KILujw7IAid6SFaKZUzlgVrTIR_eAwBCa9hz2d7DsWJHSB1xZCOE9K0a7Cfcqa2J05qXFmTTQMgFZXfHYtiS8rRtdckKcJRFOpwMFuVZZ9lcCmVRoRehKO5eBMiUoV17BYS5cQxs7745oRQDHvFWvJ2s1lWN9GlH_THNOE-n5-D9x1aNCLcJDqxqIlVQoqztcvnmnffagcsRf6d4z-1FPlnlrw0yYqm1zbhxGPXOU36fm5K7iJMUODThzi_oxq60J7rTfE3TCK2oq3LXItNcriw1ab8oarMpy1-ozU_N07YEVN6GcG2bfJOm3cjfN-quMIpSd3QV0TA';
// const LICENSEGROUP_VALID='Dev-Group';
const url = 'https://pt-wrap.wni.com';
const path = '/notif/socket/socket.io';
const opts = {
  Cookie: "mod_auth_openidc_session=de067131-623b-4870-95a2-60ea952ddd33"
  // 'idtoken': IDTOKEN_VALID,
  // 'licensegroup': LICENSEGROUP_VALID,
};

const functions = {
  "message" : (message) => {
    let receiveTime = (new Date).getTime() / 1000;
    let sendTime = message.msg.data.sendTime;
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

let notif = new nc.NotifClient(url, path, functions, opts);
notif.connect();
