const { Writable, Transform } = require('stream');
const fs = require("fs");

const caesarCipherShift = require("./shift");

const readable = filePath => {
    if(filePath === undefined) {
        console.log("Please write your text: ");
        return process.stdin;
    };

    const readFile = fs.createReadStream(filePath, "utf8");
    readFile.on("error", () =>
        console.error(`error: incorrect this path: "${ filePath }", or read file does not exists`)
    );
    return readFile;
};

const writable = filePath => {
    if(filePath === undefined) {
        class WritableStream extends Writable {
            _write(chunk, encoding, callback) {
                console.log(`Your output text: \n${ chunk.toString() }`);

                callback();
            }
        };

        return new WritableStream({ highWaterMark: 2 });
    };

    if(fs.existsSync(filePath)) {
        return fs.createWriteStream(filePath, { flags: "a" });
    } else {
        console.error(`error: incorrect this path: "${ filePath }", or write file does not exists`);
        process.exit();
    };
};

const transformable = (shift, actionType) => {
    class TransformableStream extends Transform {
        _transform(chunk, encoding, callback) {
            try {
                const resultString = caesarCipherShift(
                    chunk.toString('utf8'),
                    shift,
                    actionType
                );

                callback(null, resultString);
            } catch (err) {
                callback(err);
            }
        }
    };

    return new TransformableStream({ highWaterMark: 2 });
};

module.exports = {
    readable,
    writable,
    transformable
};