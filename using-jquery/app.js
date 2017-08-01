"use strict";
// *** Method 1 ***
// npm install -g typings
// typings install dt~jquery --global --save
// *** Method 2 ***
// npm install --save-dev @types/jquery
exports.__esModule = true;
require("jQuery");
$("#app").css({ "background-color": "green" });
