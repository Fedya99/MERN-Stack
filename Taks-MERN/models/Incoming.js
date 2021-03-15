const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    friends_id: {type: Types.ObjectId, required: true, unique: true},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Incoming', schema)