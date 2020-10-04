
module.exports = (str, shift, actionType) => {
    if((shift % 26) === 0) {
        return str
    };

    if(shift < 0) {
        shift += 26;
    };

    if(actionType === "decode") {
        shift = 26 - shift;
    };

    let resultString = "";

    for(let i = 0; i < str.length; i++) {
        let symbol = str[i];
        if(symbol.match(/[a-z]/i)) {
            const charCode = str.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {
                symbol = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                symbol = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            };
        };

        resultString += symbol;
    };

    return resultString;
};