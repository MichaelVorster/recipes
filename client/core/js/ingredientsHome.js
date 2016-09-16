Template.IngredientsHome.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('ingredientsHome');
	});
});


Template.IngredientsHome.helpers({
	ingredientsHomeList: function (){
		return IngredientsHome.find({});
	}
});


Template.IngredientsHome.events({
	'click .new-recipe': ()=> {
		Session.set('newIngredientHome', true);
	},
	'click .fa-close': function() {
		Session.set('newIngredientHome', false);
	}
});


Template.SingleIngredientHome.onCreated(function() {
	this.editMode = new ReactiveVar(false);
});


Template.SingleIngredientHome.helpers({
	ingredientHomeId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});


Template.SingleIngredientHome.events({
	'click .fa-trash': function() {
		Meteor.call('deleteIngredientHome', this._id);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get())
	}
});
