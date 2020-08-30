const mongoose = require('mongoose');
const schema = mongoose.Schema;

let tableSchema = new schema({
    field1: { type: String, required: true },
    field2: { type: String, required: false }
});

module.exports = mongoose.model('table_name', tableSchema);