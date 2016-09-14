Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
		self.subscribe('ingredientsHome');
	});
});


Template.Menu.events({
	'click .suggest-recipe': function(){
		Meteor.call('suggestRecipes');
	}
})


Template.Menu.helpers({
	recipes: function(){
		return Recipes.find({inMenu: true});
	}
});