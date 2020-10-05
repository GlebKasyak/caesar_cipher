
const errorHandler = (message) => {
    console.error(message)
    process.exit(1);
};

module.exports = {
    errorHandler
};
