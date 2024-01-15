const http = require("http");
const PORT = 9000;

const server = http.createServer((req, res) => {
  console.log("crud methods");
});

server.listen(PORT, null, null, () => {
  console.log(`Sever is listening at ${PORT}`);
});
