
module.exports = (program, action) => {
    return program
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .requiredOption('-s, --shift <number>', 'a shift', value => parseInt(value))
        .option('-i, --input <path>', 'an input file')
        .option('-o, --output <path>', 'an output file')
        .requiredOption('-a, --action <action>', 'an action encode/decode', value => {
            let action = value.toLocaleLowerCase().trim();
            if(action === "encode" || action === "decode") return value;

            console.error("error: You entered an invalid action. Correct: 'encode' or 'decode'");
            return process.exit(1);
        })
        .action(action)
        .parse(process.argv)
};