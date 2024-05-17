import http from 'http';
import express from 'express';

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.render("notfound"));

const handleAppListen = () => console.log("Server Start");

// Create HTTP Server
const httpServer = http.createServer(app);
