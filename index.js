const readline = require('readline');

const DEFAULT_RD_OPTIONS = {
    input: process.stdin,
    output: process.stdout,
    terminal: false,
};

module.exports = function(options = DEFAULT_RD_OPTIONS){
    const r = readline.createInterface(options);
    this.line = () => new Promise(resolve => r.once('line', resolve));
    this.question = q => new Promise(resolve => r.question(q, resolve));

    this.close = () => r.close();
    this.pause = () => r.pause();
    this.resume = () => r.resume();
    this.prompt = (...args) => r.prompt(...args);
    this.setPrompt = (...args) => r.setPrompt(...args);
    this.write = (...args) => r.write(...args);
};