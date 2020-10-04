const { program } = require("commander");

const setOptions = require("./option");
const action = require("./action");

setOptions(program, action);

