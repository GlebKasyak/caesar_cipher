const { pipeline } = require('stream');

const { readable, writable, transformable } = require("./stream");

module.exports = ({ shift, input, output, action }) => {
    const readableStream = readable(input);
    const writableStream = writable(output);
    const transformableStream = transformable(shift, action);

    pipeline(readableStream, transformableStream, writableStream, err => {
        if(err) {
            console.error(err.code, "Something went wrong, see error description above")
        }
    });
};