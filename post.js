const http = require("http");
// const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.method == "POST") {
  //     let body = "";
  //     req.on("data", (chunk) => {
  //       body += chunk.toString();
  //       res.write(body)
  //       console.log(body);
  //       //   res.end();
  //     });
  //     req.on("error", (err) => {
  //       console.log(err);
  //       res.write(err);
  //     });
  //     req.on("end", () => {
  //       res.end("data received");
  //     //   res.end();
  //     });
  //   }
  if (req.method == "POST") {
    //     fs.readFile("./sample.txt", "utf-8", (err, data) => {
    //       if (err) {
    //         console.log(err);
    //         res.write(err);
    //         res.end();
    //       } else {
    //         console.log(data);
    //         res.write(data);
    //         res.end();
    //       }
    //     });
    //     fs.readFile("./sample2.txt", "utf-8", (err, data) => {
    //       if (err) {
    //         console.log(err);
    //         res.write(err);
    //         res.end();
    //       } else {
    //         console.log(data);
    //         res.write(data);
    //         res.end();
    //       }
    //     });
    let ipData = "NAyani KArthik Server";
    // fs.writeFile("./sample2.txt", ipData, (err) => {
    //   if (err) {
    //     res.end();
    //   } else {
    //     res.write("data inserted");
    //     res.end();
    //   }
    // });
    fs.appendFile("./sample2.txt", ipData, (err) => {
        if (err) {
          res.end();
        } else {
          res.write("data appended");
          res.end();
        }
      });
  }
});

server.listen("5000", () => {
  console.log("server running");
});
