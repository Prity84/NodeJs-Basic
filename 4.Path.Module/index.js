// Path module

import path from "path";
// console.log(path.basename("c:\\nodejs\\prity.html"));
// console.log(path.basename("c:\\nodejs\\prity.js", ".js"));
// console.log(path.dirname("c:\\nodejs\\prity.js"));
// console.log(path.extname("c:\\nodejs\\prity.pug"));
// console.log(path.join("c:", "prity-dev", "cources", "redux"));

// Go up a level
// console.log(path.join("c:", "prity-dev", "cources", "redux", ".."));
// console.log(path.join("c:", "prity-dev", "cources", "redux", "..", ".."));
// console.log(path.normalize("c:\\courses\\redux\\store\\features"));

//path.parse()
console.log(path.parse("c:\\nodejs\\prity.html"));

console.log(path.parse("c:\\nodejs\\prity.html").base);
console.log(path.parse("c:\\nodejs\\prity.html").root);
console.log(path.parse("c:\\nodejs\\prity.html").ext);
console.log(path.parse("c:\\nodejs\\prity.html").name);
