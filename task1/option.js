const fs = require("fs");

const { errorHandler } = require("./utils");

module.exports = (program, action) => {
    return program
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .requiredOption('-s, --shift <number>', 'a shift', parseInteger)
        .option('-i, --input <path>', 'an input file', parsePath)
        .option('-o, --output <path>', 'an output file', parsePath)
        .requiredOption('-a, --action <action>', 'an action encode/decode', parseAction)
        .action(action)
        .parse(process.argv)
};

function parseInteger(value) {
    const int = parseInt(value)
    if (isNaN(int)) errorHandler(`error: '${ value }' is invalid shift value`);

    return int;
};

function parsePath(filePath){
    if(!fs.existsSync(filePath)){
        errorHandler(`error: incorrect this path: "${ filePath }", or write file does not exists`)
    };

    return filePath
};

function parseAction(value) {
    const action = value.toLocaleLowerCase().trim();
    if(action === "encode" || action === "decode") return value;

    errorHandler("error: You entered an invalid action. Correct: 'encode' or 'decode'");
};
