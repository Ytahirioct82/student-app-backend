// Server.js
// Start up and listen
// Import the app

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
