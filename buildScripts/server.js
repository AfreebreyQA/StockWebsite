"use strict";

let express = require("express");
let open = require("open");

let app = express();

app.use(express.static("src"));

app.listen(3000, function(){
    open(`http://localhost:3000`)
})