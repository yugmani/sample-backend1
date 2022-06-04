//importing node's built-in web server module
const http = require("http");

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true,
  },
];

//creating a server using createServer method of the http module
const app = http.createServer((request, response) => {
  //The request responded with the status code with the content-type header set to text/plain(application/json)
  response.writeHead(200, { "Content-Type": "application/json" });
  //the content of the site to be returned set to 'Hellow World!'(notes)
  response.end(JSON.stringify(notes));
});

//port number is set to 3001
const PORT = 3001;

//bind the http server assigned to the app variable to listen to HTTP requests sent to the port 3001
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
