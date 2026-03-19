const http = require("http");

const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  if (req.method === "POST" && req.url === "/login") {

    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      const { email, password } = JSON.parse(body);

      if (email === "av123@gmail.com" && password === "1234") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true }));
      } else {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false }));
      }
    });

  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});