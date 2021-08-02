import express from "express";
import React from "react";
import fetch from 'isomorphic-fetch';
import { renderToString } from "react-dom/server";
import path from "path";
import App from "./app";
import template from "./template";

const app = express();
//  location of static files
app.use(express.static(path.resolve(__dirname, "./dist/public")));

app.get('/', (req, res) => {
    fetch('https://api.github.com/users/gaearon/gists')
    .then(response => response.json())
    .then(gists => {
    const body = renderToString(<App gists={gists} />);
    const html = template(body,gists);
    res.send(html);
    });
    });
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

fetch('https://api.github.com/users/gaearon/gists')
 .then(response => response.json())
 .then(gists => {
 });
