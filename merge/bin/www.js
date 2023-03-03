'use strict';

const app = require('../app');
const PORT = 8000;
const PORTS = 443;

app.listen(PORT, () => {
  console.log(`Server is listening PORT:${PORT}`);
});