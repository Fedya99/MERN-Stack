const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    friends_Id: {type: Types.ObjectId, required: true, unique: true}
})

module.exports = model('Friend', schema)