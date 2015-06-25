Template.body.helpers({

});

Template.body.events({

  'click button.save': function(e){

    e.preventDefault();
    var personnel = {};

    _.extend(personnel, {
      name: prompt("Insert your name"),
      age: parseInt(prompt("Insert your age"))
    })

    Meteor.call('personnel.save', personnel, function(error, result){

      if(error){

        console.log(error, result);

      }

      else {
        console.log('Personel was inserted.')
      }

    });

  },

  'click i.edit': function(e){

    var personnel = {};

    _.extend(personnel, {
      name: prompt("Insert your name"),
      age: parseInt(prompt("Insert your age"))
    })

    Meteor.call('personnel.update', personnel, this._id, function(error, result){

      if(error){

        console.log(error, result);

      }

      else {
        console.log('Personel was updated.')
      }

    });

  },

  'click i.remove': function(e){

    e.preventDefault();

    if(confirm('Are you sure to remove this personnel?')){

      Meteor.call('personnel.remove', this._id, function(error, result){

        if(error){
          console.log(error, result)
        }
        else {
          console.log('personnel was removed successfully..')
        }

      })

    }

  }

})

Template.personnel.helpers({

  data: function(){

    return Personnel.find();

  }

})