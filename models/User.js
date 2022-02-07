const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type:String,
    maxlength: 50
  },
  email: {
    type:String,
    trim: true, //입력받은 정보의 공백 삭제
    unigue: 1
  },
  password:{
    type:String,
    minlength: 5
  },
  lastname: {
    type:String,
    maxlength: 50
  },
  role: {
    type:Number,
    default: 0
  },
  image:String,
  token:{
    type:String
  },
  tokenExp: {
    type:Number
  }
})

const User = mongoose.model('User', userSchema);

module.exports = {User}