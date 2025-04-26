import http from "http";

const hostname = "127.0.0.1";
const port = 5000;

// Server configuration
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-type", "text/plain");
	res.end("Hello World!");
});

server.listen(port, hostname, () => {
	console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
