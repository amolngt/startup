'use strict'
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16); 

const db = require('../model/index')
const Usersmodel = db.users
module.exports ={
    login:(req, res)=>{
    
    const { name, password } = req.body;
    const result={};
    if(name!=="" && password!==""){
      // const encrypt_pswd = encrypt(password); //https://www.w3schools.com/nodejs/ref_crypto.asp
      Usersmodel.findOne({ where: { name:name, is_admin:1} })
      .then((db_user)=> {
        if(db_user.dataValues){
          const status = decrypt(password,db_user.dataValues.password); 
          if(status){
            const user={ user: name}
            const payload = { user: user.name };
            const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign(payload, secret, options);
            result.token = token;
            result.status = true;
            result.result = user;
            res.status(200).send(result);
          }else{
            result.status = false;
            result.error = `Invalid User`;
            res.status(200).send(result);
          }
        }else{
          result.status = false;
          result.error = `Invalid User`;
          res.status(200).send(result);
        }
      }).catch(err=> {
       
        result.status = false;
        result.error = `Invalid User`;
        res.status(200).send(result);
      })
    } else {
      result.status = false;
      result.error = `Authentication error`;
      res.status(200).send(result);
    }
  }
}

// const encrypt=(text)=>{ 
//   var mykey = crypto.createCipher('aes-128-cbc', 'secret');
//   var mystr = mykey.update(text, 'utf8', 'hex')
//   mystr += mykey.final('hex');
//   return mystr
// } 

const decrypt=(text, db_pass)=>{ 
  var mykey = crypto.createDecipher('aes-128-cbc', 'secret');
  var mystr = mykey.update(db_pass, 'hex', 'utf8')
  mystr += mykey.final('utf8');
  return (text=== mystr) ? true : false;
  }