"use strict";

var _soal = _interopRequireDefault(require("./lib/soal1"));

var _soal2 = _interopRequireDefault(require("./lib/soalke2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Soal Nomor 1
var args = process.argv.slice(2);
var command = args[0];

switch (command) {
  case "sapa":
    var nama = args[1];
    console.log((0, _soal["default"])(nama));
    break;

  case "convert":
    var name = args[1];
    var domisili = args[2];
    var umur = args[3];
    console.log((0, _soal2["default"])(name, domisili, umur));

  default:
    break;
}