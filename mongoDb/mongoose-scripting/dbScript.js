var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/zoo1');

var Animals = mongoose.model('animals',{
  name: {type:String, required: true},
  diet: {type:String, required: true}
})

function createAnimals(arry){

  for(var i=0; i<arry.length; i++){
    var newAnimals = new Animals(arry[i]);
    newAnimals.save();
  }

}

var animalsArray = [
  {
    name:'tiger',
    diet: 'carnivores'
  },
  {
    name:'lion',
    diet: 'carnivores'
  },
  {
    name:'deer',
    diet: 'herbivores'
  },
  {
    name:'horse',
    diet: 'herbivores'
  },
  {
    name:'bear',
    diet: 'omnivores'
  },
  {
    name:'raccoon',
    diet: 'omnivores'
  }
];

// createAnimals(animalsArray);

//visitors
var Visitors = mongoose.model('visitors',{
  name: {type:String, required: true},
  favoriteAnimals: {type:[String], required: true}
})

function createVisitors(arry){

  for(var i=0; i<arry.length; i++){
    var newVisitors = new Visitors(arry[i]);
    newVisitors.save();
  }

}

var visitorsArray = [
  {
    name:'jeremy',
    favoriteAnimals: ['deer', 'tiger']
  },
  {
    name:'charley',
    favoriteAnimals: ['tiger', 'raccoon']
  },
  {
    name:'anthony',
    favoriteAnimals: ['bear', 'horse']
  },
  {
    name:'sean',
    favoriteAnimals: ['horse', 'tiger', 'bear']
  },
  {
    name:'alex',
    favoriteAnimals: ['bear', 'lion']
  },
  {
    name:'tyson',
    favoriteAnimals: ['horse', 'lion', 'deer']
  }

];

// createVisitors(visitorsArray);

//query that finds all users with a given favorite animal in their list.
Visitors.find({favoriteAnimals: 'tiger'}, function(err, people){
    if(err){
      console.log("could not find Visitors.favoriteAnimals: ", err);
    }
    else{
      console.log(people);
    }
})

//query that adds an animals to a visitor's favorite animal list.
Visitors.update({name: 'sean'},{ $push: { favoriteAnimals: 'deer' } }, function(err, people){
    if(err){
      console.log("could not find Visitors: ", err);
    }
    else{
      var arry =
      console.log(people);
    }
})
