import http from "node:http";
import express from "express";
import { WebSocketServer } from "ws";
import { site_theme } from "./data.js";
import { review } from "./review.js";

const app = express();




let number = 0;
let network_status = "WAITING...";



app.get("/", (req, res) => {
    console.log(review())
    res.send(site_theme(network_status));

});

app.post('/code-review',(req,res)=>{
    let file = req.body;
    res.send(review(file))
})

app.listen(3010, () => {

    console.log("Coreactor is running on http://localhost:3010");

});
