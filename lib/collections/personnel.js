Personnel = new Meteor.Collection('personnel');

Meteor.methods({

  'personnel.save': function(personnel){

    check(personnel, {
      name: String,
      age: Number
    })

    var exist = Personnel.findOne({name: personnel.name});

    if(exist){
      throw new Meteor.Error(500, 'Personnel was already exist.');
    }

    return Personnel.insert(personnel);

  },

  'personnel.update': function(personnel, _id){

    check(personnel, {
      name: String,
      age: Number
    });

    return Personnel.update({_id: _id}, personnel);

  },

  'personnel.remove': function(_id){

    return Personnel.remove({_id: _id});

  }

});