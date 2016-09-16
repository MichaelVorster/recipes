Template.SuggestedRecipes.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
	var update = 'suggested';
	Meteor.call('updateMissingIngredients', update);
});


Template.SuggestedRecipes.helpers({
	suggestedRecipes: function(){
		return Recipes.find(
			{inMenu: false},
			{sort: {numMissingIngredients: 1}}
		);
	}
});