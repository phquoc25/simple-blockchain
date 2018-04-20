class Block {
    constructor(index, timestemp, data, prevHash) {
        this.index = index;
        this.timestemp = timestemp;
        this.data = data;
        this.prevHash = prevHash;
    }
}
module.exports = Block