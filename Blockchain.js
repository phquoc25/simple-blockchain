const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, '01/01/2018', {amount: 10}, '0');
    }
}

module.exports = Blockchain