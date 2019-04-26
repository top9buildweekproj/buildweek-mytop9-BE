// require('dotenv').config(); // load .env variables

const server = require('./api/server.js');

// const port = process.env.PORT || 5500;
const PORT = 3500;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
