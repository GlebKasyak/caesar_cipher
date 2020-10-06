
module.exports = (str, shift, actionType) => {
    const range = 26;
    
    if((shift % range) === 0) {
        return str
    };

    if(shift < 0) {
        shift += range;
    };

    if(actionType === "decode") {
        shift = range - shift;
    };

    let resultString = "";

    for(let i = 0; i < str.length; i++) {
        let symbol = str[i];
        if(symbol.match(/[a-z]/i)) {
            const charCode = str.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {
                symbol = String.fromCharCode(((charCode - 65 + shift) % range) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                symbol = String.fromCharCode(((charCode - 97 + shift) % range) + 97);
            };
        };

        resultString += symbol;
    };

    return resultString;
};
