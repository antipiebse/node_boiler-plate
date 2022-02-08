const express =require('express');
const { trusted } = require('mongoose');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User }= require('./models/User'); 
const config = require('./config/key');
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI// ,{useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false} why? defolt value mongoose version 6.0 
).then(()=> console.log('MongoDB Connected...'))
  .catch(err=>console.log(err))

app.get('/', (req,res)=> res.send(`hello world\n how are you?`));

app.post('/register', (req, res)=>{
  //회원 가입 시 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 담는 역할
  const user = new User(req.body);
  user.save((err, userInfo)=>{
    if (err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => console.log(`example app listening on port ${port}!`));

