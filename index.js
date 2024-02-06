const http = require("http");
const PORT = 9000;

const behaviour = (req, res) => {
  console.log(req.method);
  console.log(req.url);

  // urL GET BOOKS
  if (req.method === "GET" && req.url === "/books") {
    res.write(`Welcome to the library in GET/books`);
    // console.log(`Half of a yellow sun`);
    res.end();
  }

  // url PUT books
  if (req.method === "PUT" && req.url === "/books") {
    res.write("Add new set of books in PUT/books");
    res.end();
  }

  // url DELETE books
  if (req.method === "DELETE" && req.url === "/books") {
    res.write(`Which book do you want to delete ?`);
    res.end();
  }

  // url GET books/author
  if (req.method === "GET" && req.url === "/books/author") {
    res.write(`Search for author`);
    res.end();
  }

  // url PUT books/author
  if (req.method === "PUT" && req.url === "/books/author") {
    res.write(`Enter new book author`);
    res.end();
  }

  // url POST books/author
  if (req.method === "POST" && req.url === "/books/author") {
    res.write(`Author's list`);
    res.end();
  }
};

const server = http.createServer(behaviour);
server.listen(PORT, () => {
  console.log(`Sever is listening at ${PORT}`);
});
