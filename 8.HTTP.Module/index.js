import http from "http";

//create server

const server = http.createServer((req, res) => {
  //   console.log(req);

  //which type content
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.statusMessage = "BAD";

  //shorthand for status (code, message, & header)

  res.writeHead(202, "Good", { "Content-Type": "text/html" });

  res.write("<h1>Hello From Node.js Server </h1>");
});

//Listning on port 8000
server.listen(8000, () => console.log("Server up!"));
