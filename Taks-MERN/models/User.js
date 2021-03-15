const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    friends: [{type: Types.ObjectId, ref: 'Friend'}]
})

module.exports = model('User', schema)