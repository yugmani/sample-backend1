//importing node's built-in web server module
const http = require("http");
const figlet = require("figlet");

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

  //   response.writeHead(300);
  let url = request.url;

  if (url === "/" || url === "/home") {
    //the content of the site to be returned set to 'Hellow World!'(notes)
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(notes));
  } else if (url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      "<div><h1>About Us</h1><h3>We have the best Tech Support</h3></div>"
    );
  } else if (url === "/contact") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<div><h1>Contact</h1><h3>ph:3333333333</h3></div>");
  } else {
    figlet("404!!!", function (err, data) {
      if (err) {
        console.log("Something wrong on the server");
        console.dir(err);
        return;
      }
      response.write(data);
      response.end();
    });
  }

  response.end();
});

//port number is set to 3001
const PORT = 3001;

//bind the http server assigned to the app variable to listen to HTTP requests sent to the port 3001
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
