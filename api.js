var express = require('express');

var api = express.Router();

var items = [];


api.get('/items', function(req,res,next){
    return res.json(items);
});

api.post('/items',function(req,res,next){
  if(!req.body){
    next();
  }else{
    if(!!req.body.name && !!req.body.price){
      items.push({
        name: req.body.name,
        price: req.body.price
      });
      res.json(items);
    }else{
      next();
    }
  }
});

module.exports = api;
