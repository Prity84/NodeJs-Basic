import http from "http";

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //Conditional rendering
  if (req.url === "/") {
    // res.end("<h1>Home </h1>");
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<a href ='/contact'>Contact page </a> ");
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h2>About section</h2>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h2>Contact page</h2>");
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h1>Page not found 404</h1>");
  }
});

server.listen(8000, () => console.log("Server up!"));
