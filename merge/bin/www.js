'use strict';

const app = require('../app');
const PORT = 8000;
const PORTS = 443;

http.createServer(app).listen(PORT, () => {
  console.log(`Server is listening PORT:${PORT}`);
});
https.createServer(option, app).listen(PORTS, () =>{
  console.log(`Server is listening PORT:${PORTS}`);
});