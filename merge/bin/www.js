'use strict';

const app = require('../app');
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening PORT:${PORT}`);
});