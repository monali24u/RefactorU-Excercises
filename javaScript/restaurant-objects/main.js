
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function(){
  var result = this.name +' has ' +this.calories +' calories and is '+ this.vegan +' vegan, and is '+ this.glutenFree+ ' gluten Free and is '+ this.citrusFree+ ' citrus Free ';
  return result;
};

var potatoCurry = new FoodItem("potatoCurry", 123, true, true, false);
var chickenCurry = new FoodItem("chickenCurry", 222, false, true, false);
var orangeJuice = new FoodItem("orangeJuice", 87, true, true, true);

console.log(potatoCurry.stringify());
console.log(chickenCurry.stringify());
console.log(orangeJuice.stringify());

//-----------------------------------------------------------------------------
//Drink

var Drink = function(name, description, price, drintItems){
    this.name = name;
    this.description = description;
    this.price = price;
    this.drintItems = drintItems;
}

Drink.prototype.stringify = function(){

  var drinkResult = this.name + " is a " + this.description +  " It costs "+ this.price + "$  and has ingredients like ";
  var arryLength = this.drintItems.length;

  for(var i=0; i<arryLength; i++){
    drinkResult = drinkResult +"\n " +this.drintItems[i].stringify();
  }

  return drinkResult;
};

//plate
var Plate = function(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

Plate.prototype.stringify = function(){
  var plateResult = this.name + " is " + this.description +  " that costs "+ this.price + "$  and has ingredients like ";
  var arryLength = this.ingredients.length;

  for(var i=0; i<arryLength; i++){
    plateResult = plateResult +"\n " +this.ingredients[i].stringify();
  }

  return plateResult;
};

Plate.prototype.isVegan = function(){
  var arryLength = this.ingredients.length;
  for(var i=0; i<arryLength; i++){
    if(!this.ingredients[i].vegan){
      return false;
    }
  }
  return true;
};

Plate.prototype.isGlutenFree = function(){
  var arryLength = this.ingredients.length;
  for(var i=0; i<arryLength; i++){
      if(!this.ingredients[i].glutenFree){
        return false;
      }
  }
  return true;
};

Plate.prototype.isCitrusFree = function(){
  var arryLength = this.ingredients.length;
  for(var i=0; i<arryLength; i++){
      if(!this.ingredients[i].citrusFree){
        return false;
      }
  }
  return true;
};

// Order
function Order(plates) {
	this.plates = plates;
}

Order.prototype.isVegan = function(){
  for(var i=0; i<this.plates.length; i++){
    if(!this.plates[i].isVegan()){
      return false;
    }
  }
  return true;
}

// Menu
function Menu(plates) {
	this.plates = plates;
}

// Restaurant
function Restaurant(name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
}

Restaurant.prototype.toString = function(){
  var resultStr = "welcome to "+ this.name + " " + this.description;
}

// Customer
function Customer(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}

Customer.prototype.toString = function(){
	return "Hi, I am" + this.dietaryPreference;
}

//plate it
var tortilla = new FoodItem('Tortilla', 300, true, false, true);
var avocado = new FoodItem('Avocado', 90, true, true, true);
var cheese = new FoodItem('Cheese', 250, false, true, true);

var onion = new FoodItem('Onion', 50, true, true, true);
var cilantro = new FoodItem('Cilantro', 30, true, true, true);

var tequila = new FoodItem('Tequila', 200, true, false, true);
var soda = new FoodItem('soda', 100, true, false, true);
var lime = new FoodItem('Lime', 40, true, true, false);

var burrito = new Plate('Burrito', 'A hearty meal.', 10, [tortilla, avocado, cheese]);
var guacamole = new Plate('Guácomole', 'A healthy meal.', 4, [avocado, onion, cilantro, lime]);
var margarita = new Drink('Margarita', 'Delicious and makes you feel good.', 8, [tequila, soda, lime]);

var menu = new Menu([burrito, guacamole, margarita]);
var restaurant = new Restaurant('Three Margarita', 'A fine Mexican dining experience.', menu);


console.log(burrito.isVegan());
console.log(guacamole.stringify());
console.log(margarita.stringify());

var todaySpecial = new Order([burrito, guacamole, margarita]);
console.log(todaySpecial.isVegan());
