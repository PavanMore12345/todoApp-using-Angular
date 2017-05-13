var express = require('express'),
    app = express(),
    router = express.Router(),
    addcard = require('../model/user');
var mongo = require('mongoose');
var connect1 = mongo.createConnection('mongodb://127.0.0.1/mydb2');
var Schema = mongo.Schema;
var cardSchema = Schema({
    id1: {
        type: Number
        // unique: true
    },
    title: {
        type: String

    },
    bodyContent: {
        type: String

    }
}, {
    collection: "cardData"
});
cardSchema.statics.addCardData = function(data, callback) {
    var self = this;
    var card = new self({
        id1:data.id1,
        title:data.title,
        bodyContent:data.bodyContent
    });
    card.save(callback);
}
cardSchema.statics.getCard=function(id,callback)
            {
console.log("id is", id);
                User.find({id1:id},callback);
              }
  cardSchema.statics.deleteCardData=function(id,callback)
  {
    User.remove({_id:id},callback);
  }
  cardSchema.statics.getCardData=function(id,callback)
  {
    User.find({_id:id},callback);
  }
  cardSchema.statics.updateCardData=function(data,callback)
  {
    // console.log("abccccccccccc");
    // var self = this;
    // var card = new self({
    //     title:data.title,
    //     bodyContent:data.bodyContent
    // });
    console.log(data);
     User.update({ _id: data.id }, { $set: {title:data.title,bodyContent:data.bodyContent}},callback);
    // card.save(callback);
  }
  // cardSchema.statics.updateCardData=function(id,callback)
  // {
  //   User.update({_id:id},{$set:{'title':'New MongoDB Tutorial'},{'body':'sdfsf'}});
  // }
var User = connect1.model('User', cardSchema);
module.exports = User;
