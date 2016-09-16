Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
	var update = 'in menu';
	Meteor.call('updateMissingIngredients', update);
});

Template.ShoppingList.helpers({
	shoppingList: function(){
		return Recipes.find({inMenu: true});
	}
});